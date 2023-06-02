import React, { useReducer,createContext, useState, useMemo } from "react";
import Card from "./Card";
import { useLoaderData, defer,Await, Form, Link ,useSearchParams, useNavigation} from "react-router-dom";
import Reducer from "./Reducer";
import { useDispatch } from "react-redux";
import { Cart } from "./Cart";
import { CartActions } from "../store/store";

export const loader = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = response.json();
  return defer({ data });
};

export const action=async ({request})=>{
    const formData=await request.formData()
   let search= formData.get("search")
   console.log(search)
    return null
}
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
  const stat=useNavigation()
  const dispatcher=useDispatch()
  const data = useLoaderData();
  const [searchParams,setSearchParams]=useSearchParams()
  const filter=searchParams.get("type")
  console.log(stat)
  function funct(key,value){
     let param=new URLSearchParams
      param.set(key,value)
      return `?${param.toString()}`
  }
  return (
    <context.Provider value={useMemo(()=>{return {counter:state.counter,counterDispatch:dispatch}},[state.counter])}>

   
    <div>
      <>
          <Link to={funct("type","electronics")}>electronics</Link>
          <button onClick={()=>dispatcher(CartActions.showCartHandler())}>cart</button>
          <Cart/>
        </>
      <>
         <Form method="post">
             <input type="text" name="search"  />
             <button>search</button>
         </Form>
       </>
      <React.Suspense fallback={<h1>Loading......</h1>}>
        <Await resolve={data.data}>
          {(resolvedData) => {
            let filteredData=filter ? resolvedData.filter((item)=>item.category===filter):resolvedData
            return (
              <>
                {filteredData.map((item) => {
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
