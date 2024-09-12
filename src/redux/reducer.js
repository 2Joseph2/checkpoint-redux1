import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';


const todoSlice = createSlice({
    name:'todos',
    initialState:{
        items:[]
    },
    reducers:{
        addTodo:(state,action)=>{
            state.items.push({id:uuidv4(),test:action.payload,completed:false})
        },
        toggleTodo : (state,action)=>{
            const todo = state.items.find(item => item.id === action.payload);
            if(todo){
                todo.completed = !todo.completed;
            }
        },
        removeTodo: (state, action) => {
          state.items = state.items.filter(item => item.id !== action.payload);
        },
    }
})

export const { addTodo, toggleTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;