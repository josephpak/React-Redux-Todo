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

  handleAddTask = e => {
    e.preventDefault();
    this.setState({task: ''})
    this.props.addTodo(this.state.task)
}

  render() {
    return (
        <FormWrapper
        onSubmit={this.handleAddTask}
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
