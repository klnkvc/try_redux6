import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {toggleDarkMode} from "./store/slice1.js";
import {increment} from "./store/slice2.js";

function App() {
    const isDark = useSelector(state => state.slice1.isDark)
    const counter = useSelector(state => state.slice2.counter)
    const dispatch = useDispatch()
    const [dark, setDark]= useState(true)
    useEffect(()=>{
        setDark(isDark)
    }, [isDark])

    const handleToggle=()=>{
        dispatch(toggleDarkMode())
    }
    const handleIncrement=()=>{
        dispatch(increment())
    }

    return (
    <>
        <h1>{dark?"Light Mode":"Dark Mode"}</h1>
        <h1>{counter}</h1>
        <button onClick={handleToggle}>Toggle</button>
        <button onClick={handleIncrement}>increment</button>
    </>
  )
}

export default App
