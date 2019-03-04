import React from 'react'
import Todo from './Todo'
import styled from 'styled-components';

const ListWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`

const TodoList = props => {
  return (
    <ListWrapper>
      {props.todos.map((todo, index) => {
          return (
          <Todo 
            key={index}
            task={todo.task}
            uid={todo.uid}
            completed={todo.completed}
            toggleTodo={props.toggleTodo}
          />
          )
      })}
    </ListWrapper>
  )
}

export default TodoList;