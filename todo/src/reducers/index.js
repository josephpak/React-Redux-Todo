import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, CLEAR_COMPLETED } from "../actions";
import { Z_FILTERED } from "zlib";

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
        
        case DELETE_TODO:
        return {
            ...state,
            todos: state.todos.filter(todo => todo.uid !== action.payload)
            
            
        }
        
        case CLEAR_COMPLETED:
        return {
            ...state,
            todos: state.todos.filter(todo => !todo.completed)
        }

        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map(todo => {
                    console.log(`Toggled`)
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