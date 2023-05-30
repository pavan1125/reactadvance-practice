import ContextProvider from "./components/context"
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from 'react-router-dom';
import {useState,useEffect,useRef} from "react"

import Page,{action as pageAction} from "./components/Page";
import Header from "./components/Header";
import UserPage from "./components/UserPage";

const router=createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Header/>}>
            <Route path="/page" element={<Page/>} action={pageAction}/>
            <Route path="/profile" element={<UserPage/>} />
        </Route>
    ),
)
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
    <>
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
    <ContextProvider value="hi">

      <RouterProvider router={router}/>
    </ContextProvider>
    </>
  );
}

export default App;
