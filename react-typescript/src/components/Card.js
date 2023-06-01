import { useNavigate } from 'react-router-dom'
import {useDispatch} from "react-redux" 
import { CartActions } from '../store/store'


 const Card= (props) => {
     const dispatch=useDispatch()
     const navigate=useNavigate()
    function seeDetails(id){
          return navigate(`${id}`)
    }
    function AddToCart(item){
     
          dispatch(CartActions.AddToCart(item))
    }
  return (
    <div>
         <div>
             <img style={{width:150}} src={props.item.image}/>
             <h4>title:{props.item.description}</h4>
             <h5>price:{props.item.price}</h5>
             <button onClick={()=>AddToCart(props.item)}>add to cart</button>
             <button onClick={()=>seeDetails(props.item.id)}>see details</button>
         </div>
    </div>
  )
}

export default Card
