import React from 'react';
import styled from 'styled-components';

const FormWrapper = styled.form`
    display: flex;
    justify-content: center;
`

class TodoForm extends React.Component {
  constructor() {
      super()
      this.state = {
        task: ''
      }
  }
  
  handleTaskForm = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  addTodo = e => {
    e.preventDefault();
    this.setState({task: ''})
    this.props.addTodo(this.state.task)
}

  render() {
    return (
        <FormWrapper
        onSubmit={this.addTodo}
        >
          <button>Add Todo</button>
          <input
            text="text"
            value={this.state.task}
            onChange={this.handleTaskForm}
            name="task"
            placeholder="...Todo"
          ></input>
        </FormWrapper>
      )
  }
}

export default TodoForm;
