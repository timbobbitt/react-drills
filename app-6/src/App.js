import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ToDo from "./ToDo.js"
class App extends Component {
  constructor(){
    super();

    this.state = {
      list: [],
      input: ''
    };

    this.addTask = this.addTask.bind(this);
  }

  inputChange(value) {
    this.setState({input: value});
  }

  addTask() {
    this.setState({
      list: [...this.state.list, this.state.input],
      input: ""
    });
  }
  render() {
    let list = this.state.list.map((element, index) => {
      return <ToDo key={index} task={element} />;
    });
    
    return (
      <div className="App">
        <h1>My To Do List</h1>

        <div>
          <input value={this.state.input} placeholder="Enter Data" onChange={element => this.inputChange(element.target.value)} />
          <button onClick={this.addTask}> Add </button>
          {list}
        </div>
      </div>
    );
  }
}

export default App;
