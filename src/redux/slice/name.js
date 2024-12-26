
import { createSlice } from '@reduxjs/toolkit';
export const nameSlice= createSlice({

    name:'name',
    initialState:'',
    reducers:{
        UpdateName:(state,action)=>{
       return action.payload;
        }
    }
})
export const {UpdateName} = nameSlice.action;
export default nameSlice.reducer;