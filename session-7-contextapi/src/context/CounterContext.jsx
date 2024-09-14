import { useState } from "react";
import { createContext } from "react";

export const CounterContext=createContext();

export const CounterProvider=({children})=>{
    const [count,setCount]=useState(0);
    const increment=()=>{
        setCount(count+1)
    }
    return (
        <CounterContext.Provider value={{count,increment}}>
            {children}
        </CounterContext.Provider>
    )
}