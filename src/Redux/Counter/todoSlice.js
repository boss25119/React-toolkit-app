import {createSlice} from '@reduxjs/toolkit'

export default createSlice({
    name : "todos",
    initialState: [
        {id: 1, name: 'Learn Yoga', completed: false},
        {id: 2, name: 'Learn Redux', completed: true}, 
        {id: 3, name: 'Learn NodeJs', completed: false}
    ],
    reducers: {
       addPost: (state, action) => {
           state.push(action.payload)
       },
       toggleTodoStatus: (state, action) => {
            const currentTodo = state.filter(todo => todo.id === action.payload)
            currentTodo.completed = !currentTodo.completed
       }
    }
})


