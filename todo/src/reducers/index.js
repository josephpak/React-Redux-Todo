import { ADD_TODO, TOGGLE_TODO } from "../actions";

const initialState = {
    todos: [{task: "Eat", completed: false}]
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:  
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map((todo) => {
                    if(todo.uid === action.payload) {
                        return {
                            ...todo,
                            completed: !todo.completed
                        }
                    }
                    return todo
                })
            }    

        default:
            return state;    
    }   
}