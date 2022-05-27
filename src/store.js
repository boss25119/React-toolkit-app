import {configureStore} from '@reduxjs/toolkit'
import  todoSlice from './Redux/Counter/todoSlice'


export const store = configureStore({
    reducer : {
        todo : todoSlice.reducer
    }
})