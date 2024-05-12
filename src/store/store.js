import {configureStore} from "@reduxjs/toolkit";
import reducer from "./reducer.js";

const Store= configureStore({
    reducer: reducer
})

export default Store