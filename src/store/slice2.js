import {createSlice} from "@reduxjs/toolkit";

const slice2 =createSlice({
    name:'slice1',
    initialState:{counter:2},
    reducers:{
        increment(state){
            state.counter ++
        }
    }
})

export const {increment} =slice2.actions
export default slice2.reducer