import React,{useContext,useCallback,useMemo} from 'react'

import {context} from "./Home"





const  Reducer=()=> {

  const data=useContext(context)
  console.log("reducer")
  const AddHandler=useCallback(()=>{
      data.counterDispatch({type:"Add"})
    },[])
  
  const subHandler=useCallback(()=>{
      data.counterDispatch({type:"Sub"})
    },[])
  
 
  return (
    <div>
         counter:{data.counter}
         <button onClick={AddHandler}>add</button>
         <button onClick={subHandler}>sub</button>
    </div>
  )
}

export default React.memo(Reducer)