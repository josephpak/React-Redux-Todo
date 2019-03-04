import React from 'react';
import styled from 'styled-components';

const TodoWrapper = styled.div`
    border: 1px dashed black;
    width: 400px;
    display: flex;
    justify-content: center;
    padding: 15px 0;
`    

const Todo = props => {
  return (
    <TodoWrapper>
    {props.task}
    </TodoWrapper>
  )
}

export default Todo;