import { Link, useLoaderData } from "react-router-dom"
export const loader=async ({params})=>{
       let id=params.id
       let response=await fetch(`https://fakestoreapi.com/products/${id}`)
       let data=await response.json()  
       return data
}
export default function ProductDetail() {
    const item=useLoaderData()
   
  return (
    <div>
         <Link to=".." relative="path"><button>Back to products</button></Link>
         <div>
             <img style={{width:150}} src={item.image}/>
             <h4>title:{item.description}</h4>
             <h5>price:{item.price}</h5>
             
         </div>
    </div>
  )
}
