import uuidv4 from 'uuid';

export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const CLEAR_COMPLETED = "CLEAR_COMPLETED";
export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";

export const addTodo = task => {
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

export const deleteTodo = uid => {
    return {
        type: DELETE_TODO,
        payload: uid
    }
}

export const toggleTodo = uid => {
    return {
        type: TOGGLE_TODO,
        payload: uid
    }
}

export const clearCompleted = () => {
    return {
        type: CLEAR_COMPLETED,
    }
}