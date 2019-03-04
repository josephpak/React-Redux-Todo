import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from './actions';

import TodoList from './components/TodoList'
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>My TodoList</h1>
          <TodoList
            todos={this.props.todos}
          />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps, { addTodo })(App);
