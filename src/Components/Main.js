// external dependencies
import React, { Component } from 'react';
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

const mainStyle = {
    margin: 'auto',
    width: '50%',
    marginTop: '100px'
}


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
        todoList: []
    }
    this.onTodoAdded = this.onTodoAdded.bind(this)
  }

  onTodoAdded (todo) {
      this.setState({
          todoList: [
              todo,
              ...this.state.todoList
          ]
      })
  }

  render() {
    return (
        <div style={mainStyle}>
            <AddTodo
                onTodoAdded={this.onTodoAdded}
            />
            <TodoList
                list={this.state.todoList}
            />
        </div>

    );
  }
}


export default Main;