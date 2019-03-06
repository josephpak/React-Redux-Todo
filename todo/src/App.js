import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo, clearCompleted, toggleRage } from './actions';
import styled from 'styled-components';

import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import './App.css';

const AppWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: column;
`

const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 25px 0;
  font-size: 2rem;
`
const PanelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  border: 1px solid black;
  align-items: center;
  height: 100px;
  justify-content: space-between;
  padding: 10px 0;
  border-radius: .5rem;

  button {
    width: 150px;
    padding: 8px 15px;
    background: white;
    border-radius: .7rem;
    cursor: pointer;
    font-family: Lato;

    &:focus {
      outline: 0;
    }
  }

  .clear {
    border-color: red;
    color: red;
  }

  .rage {
    border-color: purple;
    color: purple;
  }

  ${props => props.rage && `
      .rage {
        background-color: purple;
        color: white;
      }
    `}
`

class App extends Component {

  handleClearComplete = e => {
    e.preventDefault();
    const check = window.confirm("Are you sure you want to delete this task?")
    if (check) {
      this.props.clearCompleted()
    }
  }

  render() {
    console.log("Rendering")
    return (
      <AppWrapper>
          <HeaderWrapper>My TodoList</HeaderWrapper>
          <PanelWrapper
          rage={this.props.rage}
          >
            <TodoForm
              addTodo={this.props.addTodo}
              rage={this.props.rage}
            />
            <div>
              <button
              className="clear"
              onClick={this.handleClearComplete}
              >Clear Completed</button>
              <button
              className="rage"
              rage={this.props.rage}
              onClick={this.props.toggleRage}
              >Shall we Rage?</button>
            </div>
          </PanelWrapper>
          
          <TodoList
            todos={this.props.todos}
            toggleTodo={this.props.toggleTodo}
            deleteTodo={this.props.deleteTodo}
          />
          
      </AppWrapper>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    todos: state.todos,
    rage: state.rage
  };
};

export default connect(mapStateToProps, { addTodo, toggleTodo, deleteTodo, clearCompleted, toggleRage })(App);
