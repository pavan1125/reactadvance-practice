import React from 'react'
import CartItems from '../models/CartItemModel'
import  {useDispatch} from "react-redux"
import { CartActions } from '../store/store'
export const CartItem:React.FC<{item:CartItems}> = (props) => {
    const dispatch=useDispatch()

    function removeHandler(id:number){
      dispatch(CartActions.RemoveFromCart(id))
    }
  return (
    <div>
        <p><b>{props.item.title}</b></p>
        <button onClick={()=>removeHandler(props.item.id)}>remove item</button>
    </div>
  )
}
