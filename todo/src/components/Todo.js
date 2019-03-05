import React from 'react';import { reducer } from '../reducers';

import styled from 'styled-components';

const TodoWrapper = styled.div`
    border: 1px dashed black;
    width: 600px;
    max-width: 600px;
    display: flex;
    justify-content: space-between;
    padding: 15px 25px;
    height: 50px
    align-items: center;

    p, button {
        font-family: Lato;
        font-size: 1.2rem;
    }

    button {
        width: 100px;
        padding: 8px 15px;
        background: white;
        border-radius: .7rem;
        cursor: pointer;
        font-family: Lato;
        border-color: red;
        color: red;
    }

    ${props => props.completed && `
        text-decoration: line-through
    `}

`

const Todo = props => {

  return (
    <>
        <TodoWrapper
        completed={props.completed}
        onClick={() => {props.toggleTodo(props.uid)}}
        >
        <p>{props.task}</p>
        <button
        onClick={() => {props.deleteTodo(props.uid)}}
        >Delete Task</button>
        </TodoWrapper>     
    </>
  )
}

export default Todo;