import React from 'react';
import styled from 'styled-components';
import RagePower from 'rage-power';

const FormWrapper = styled.form`
    display: flex;
    justify-content: center;

    button {
        color: green;
        border-color: green;
    }

    input {
        border: none;
        border-bottom: 1px solid black;
        padding: 10px 0;
        padding-left: 20px;
        width: 300px;
        font-family: Lato;
        font-size: 1.2rem;

        &:focus {
            outline: none;
        }
    }
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
        autoComplete="off"
        onSubmit={this.addTodo}
        >
          <button>Add Todo</button>
          {this.props.rage ? <RagePower>
          <input
            text="text"
            value={this.state.task}
            onChange={this.handleTaskForm}
            name="task"
            placeholder="...Todo"
          ></input>
          </RagePower>
          : <input
            text="text"
            value={this.state.task}
            onChange={this.handleTaskForm}
            name="task"
            placeholder="...Todo"
            ></input>       
          }
          
        </FormWrapper>
      )
  }
}

export default TodoForm;
