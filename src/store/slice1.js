import {createSlice} from "@reduxjs/toolkit";

const slice1 =createSlice({
    name:'slice1',
    initialState:{isDark:false},
    reducers:{
        toggleDarkMode(state){
            state.isDark = !state.isDark
        }
    }
})

export const {toggleDarkMode} =slice1.actions
export default slice1.reducer