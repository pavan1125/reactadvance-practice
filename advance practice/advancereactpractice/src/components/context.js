import React, { createContext } from "react"
export const Context=createContext()


const ContextProvider=(props)=>{
     return (
        <Context.Provider value={props.value}>
             {props.children}
        </Context.Provider>
     )
}

export default ContextProvider