import React from 'react'
import { useSelector } from 'react-redux'
import CartItems from '../models/CartItemModel'
import { CartItem } from './CartItem'
export const Cart:React.FC<{}> = () => {
    const items=useSelector((state:any)=>state.cart)
    console.log(items)

  return (
    <div>
         {items.Items.map((item:CartItems)=>{
             return(
                 <CartItem key={item.id} item={item}/>
             )
         })}
    </div>
  )
}
