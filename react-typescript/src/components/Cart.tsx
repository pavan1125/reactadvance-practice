import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import CartItems from '../models/CartItemModel'
import { CartItem } from './CartItem'
import classes from "./Cart.module.css"
import { CartActions } from '../store/store'
export const Cart:React.FC<{}> = () => {
    const items=useSelector((state:any)=>state.cart)
    const dispatch = useDispatch()
    console.log(items)
   
  return (
    <div onClick={()=>dispatch(CartActions.showCartHandler())} className={items.showCart ? classes.backdrop:""}>
         {items.Items.map((item:CartItems)=>{
             return(
                 <CartItem key={item.id} item={item}/>
             )
         })}
    </div>
  )
}
