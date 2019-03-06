import React from 'react';import { NONAME } from 'dns';
import { reducer } from '../reducers';

import styled from 'styled-components';

const TodoWrapper = styled.div`
    border: 1px dashed black;
    width: 600px;
    max-width: 600px;
    display: flex;
    justify-content: space-between;
    padding: 15px 25px;
    height: 50px;
    min-height: 50px;
    align-items: center;

    p, button {
        font-family: Lato;
        font-size: 1.2rem;
        cursor: pointer;
    }

    p {
        width: 100%;
    }

    button {
        width: 120px;
        padding: 8px 15px;
        background: white;
        border-radius: .7rem;
        cursor: pointer;
        font-family: Lato;
        border-color: red;
        color: red;
        text-decoration: none;

        &:focus {
            outline: 0
        }
    }

    ${props => props.completed && `
        background-color: lightgray

        p {
            text-decoration: line-through
        }    
    `}



`

const Todo = props => {

  const handleDelete = e => {
    e.preventDefault();
    const check = window.confirm("Are you sure you want to delete this task?")
    if (check) {
        props.deleteTodo(props.uid)
    }
  }  

  return (
    <>
        <TodoWrapper
        completed={props.completed}
        >
        <p
        onClick={() => {props.toggleTodo(props.uid)}}
        >{props.task}</p>
        <button
        onClick={handleDelete}
        >Delete Task</button>
        </TodoWrapper>     
        
    </>
  )
}

export default Todo;