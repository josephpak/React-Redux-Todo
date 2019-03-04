import React from 'react'
import Todo from './Todo'
import styled from 'styled-components';

const ListWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const TodoList = props => {
  return (
    <ListWrapper>
      {props.todos.map(todo => {
          return (
          <Todo 
            task={todo.task}
          />
          )
      })}
    </ListWrapper>
  )
}

export default TodoList;