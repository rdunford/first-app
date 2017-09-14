import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo'
import Completed from './components/Completed'

class App extends Component {
  constructor() {
    super();

    this.state = {
      todo: [],
      completed: ['De-scale', 'shuck']
    }
    // Bind the methods so the child components can use the methods
    this.addItem = this.addItem.bind(this)
    this.completeItem = this.completeItem.bind(this)
  }

  addItem(val){
    let todoCopy = this.state.todo.slice();
    todoCopy.push(val)
    this.setState({
     todo: todoCopy
    })
  }

  completeItem(index, val){
    let todoCopy = this.state.todo.slice()
    todoCopy.splice(index, 1)

    let completedCopy = this.state.completed.slice();
    completedCopy.push(val)

    this.setState({
      todo:todoCopy,
      completed: completedCopy
    })
  } 

  render() {
    return (
      <div className="App">
        {/* Passing the functions to the components */}
        <Todo todoList= {this.state.todo} addItem ={this.addItem} completeItem ={this.completeItem}/>
        <Completed completedList={this.state.completed}/>
      </div>
    );
  }
}

export default App;
