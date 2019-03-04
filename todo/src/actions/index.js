import uuidv4 from 'uuid';

export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";

export const addTodo = task => {
    console.log(task);
    const newTask = {
        task: task,
        uid: uuidv4(),
        completed: false,
      };
    return {
        type: ADD_TODO,
        payload: newTask
    }
}

export const toggleTodo = id => {
    console.log(id)
    return {
        type: TOGGLE_TODO,
        payload: id
    }
}
