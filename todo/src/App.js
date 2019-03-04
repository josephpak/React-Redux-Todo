import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleTodo } from './actions';
import styled from 'styled-components';

import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import './App.css';

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  flex-direction: column;
`

const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 25px 0;
`


class App extends Component {
  render() {
    return (
      <AppWrapper>
          <HeaderWrapper>My TodoList</HeaderWrapper>
          <TodoList
            todos={this.props.todos}
            toggleTodo={this.props.toggleTodo}
          />
          <TodoForm
            addTodo={this.props.addTodo}
          />
      </AppWrapper>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps, { addTodo, toggleTodo })(App);
