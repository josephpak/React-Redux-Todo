import React from 'react';
import styled from 'styled-components';

const TodoWrapper = styled.div`
    border: 1px dashed black;
    width: 400px;
    display: flex;
    justify-content: space-around;
    padding: 15px 0;

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
        {props.task}
        <button
        onClick={() => {props.deleteTodo(props.uid)}}
        >x</button>
        </TodoWrapper>     
    </>
  )
}

export default Todo;