import {combineReducers} from "@reduxjs/toolkit";
import slice1 from "./slice1.js";
import slice2 from "./slice2.js";

const reducer=combineReducers({
    slice1,
    slice2
})

export default reducer