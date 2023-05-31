import {createSlice,configureStore} from "@reduxjs/toolkit"



const cartInitialState={
      Items:[{id:1,title:"pavan"}],
      totalPrice:0
}

const CartSlice=createSlice({
     name:"Cart",
     initialState:cartInitialState,
     reducers:{
          AddToCart:()=>{
             console.log("Add to cart called")
          },
          RemoveFromCart:()=>{ 
              console.log("remove from cart called")
          }
     }
})


const store=configureStore({reducer:{cart:CartSlice.reducer}})

export const CartActions=CartSlice.actions
export default store