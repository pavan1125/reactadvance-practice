import {createSlice,configureStore} from "@reduxjs/toolkit"



const cartInitialState={
      Items:[],
      totalPrice:0
}

const VideoState={
      Link:"",
      Videos: [
          {
            title: "redux",
            link: "http://192.168.100.114:8080/Video_Tutorials/React/React_The_Complete_Guide_incl_Hooks_ReactRouter_Redux/19%20-%20Advanced%20Redux/001%20Module%20Introduction.mp4",
          },
          {
            title: "next",
            link: "http://192.168.100.114:8080/Video_Tutorials/React/React_The_Complete_Guide_incl_Hooks_ReactRouter_Redux/22%20A%20%28Pretty%20Deep%20Dive%29%20Introduction%20to%20Next/001%20Module%20Introduction.mp4",
          },
        ]
}
const CartSlice=createSlice({
     name:"Cart",
     initialState:cartInitialState,
     reducers:{
          AddToCart(state,action){
              const Nitem=action.payload
              const existingItem=state.Items.find(item=>Nitem.id===item.id)
              if(!existingItem){
                state.Items.push({
                     id:Nitem.id,
                     title:Nitem.title,
                     price:Nitem.price,
                     Quantity:1
                })
                state.totalPrice=state.totalPrice+Nitem.price
              }
              else{
                 existingItem.Quantity++
                 state.totalPrice=state.totalPrice+existingItem.price
              }
          },
          RemoveFromCart(state,action){
               
               const id=action.payload
               const existingItem=state.Items.find((item)=>item.id===id)
               
               if(existingItem.Quantity>1){
                     existingItem.Quantity--
                     state.totalPrice-=existingItem.price
               }else{
                     state.totalPrice-=existingItem.price 
                     let items=state.Items.filter((item)=>item.id!==id)
                     state.Items=items
               }
          }
     }
})
const VideoSlice=createSlice({
      name:"video",
      initialState:VideoState,
      reducers:{
            addLink(state,action){
                state.Link=action.payload
            }
      }
})


const store=configureStore({reducer:{cart:CartSlice.reducer,video:VideoSlice.reducer}})

export const CartActions=CartSlice.actions
export const VideoActions=VideoSlice.actions
export default store