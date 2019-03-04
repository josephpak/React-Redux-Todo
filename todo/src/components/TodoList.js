import React from 'react'
import Todo from './Todo'
import styled from 'styled-components';

const ListWrapper = styled.div`
  border: 1px solid black;
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