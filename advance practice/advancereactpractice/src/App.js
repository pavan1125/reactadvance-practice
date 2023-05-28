import {useState,useEffect,useRef} from "react"

function App() {
   
  const [state,setState]=useState([])
  const [count,setCount]=useState(1)
 const searchRef=useRef()
 const searchHandler=(e)=>{
     setCount(searchRef.current.value)
 }
   useEffect(()=>{
       fetch(`https://swapi.dev/api/people/${count}`).then(res=>res.json()).then(res=>setState(JSON.stringify(res)))
   },[count])
  return (
    <div className="App">
        <input ref={searchRef} /> 
        <button onClick={searchHandler}>search by id</button>
        <p>{state}</p>
        <button onClick={()=>{setCount((prev)=>{
            return prev-1
        })}}>previous character</button>
        <button onClick={()=>{setCount((prev)=>{
            return prev+1
        })}}>next character</button>
    </div>
  );
}

export default App;
