import { Link, useSearchParams } from 'react-router-dom'
import {useDispatch} from "react-redux" 
import { CartActions } from '../store/store'


 const Card= (props) => {
     const dispatch=useDispatch()
     const [search,setSearch]=useSearchParams()
    
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
             <Link to={`${props.item.id}`} state={{search:`?${search.toString()}`}}>see details</Link>
         </div>
    </div>
  )
}

export default Card
