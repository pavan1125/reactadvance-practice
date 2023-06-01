import React, { useReducer,createContext, useState, useMemo } from "react";
import Card from "./Card";
import { useLoaderData, defer,Await } from "react-router-dom";
import Reducer from "./Reducer";

export const loader = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = response.json();
  return defer({ data });
};


export const context=createContext()



const initialState={
  counter:0
}

const reducer=(state,action)=>{
   switch(action.type){
        case "Add":
          return{
             ...state,
             counter:state.counter+1
          }
         case "Sub":
             if(state.counter===0){
                 return state;
             }else{

                 return{
                     ...state,
                     counter:state.counter-1
                 } 
             }
        default:
            throw new Error("operation not found")    
   }
}
const Home = React.memo((props) => {
  const [state,dispatch]=useReducer(reducer,initialState)
  const [counter,setCounter]=useState(0)
  const data = useLoaderData();
  return (
    <context.Provider value={useMemo(()=>{return {counter:state.counter,counterDispatch:dispatch}})}>

   
    <div>
      <React.Suspense fallback={<h1>Loading......</h1>}>
        <Await resolve={data.data}>
          {(resolvedData) => {
            return (
              <>
                {resolvedData.map((item) => {
                  return <Card key={item.id} item={item} />;
                })}
              </>
            );
          }}
        </Await>
      </React.Suspense>
      <button onClick={()=>setCounter((prev)=>prev+1)}>ass</button>
      <Reducer/>
    </div>
    </context.Provider>
  );
});
export default Home;
