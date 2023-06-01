import React,{useEffect,useState} from 'react'
import {createPortal} from "react-dom"
import Item from './Item'
import Model from './Model'

export default function Images() {
    const  [showModel,setShowModel]=useState(false)
  const [images,setImages]=useState([])
  const [item,setItem]=useState({})
  const itemsPerPage=5
  const [currentPage,setCurrentPage]=useState(1)
  const [lastIndex,setLastIndex]=useState(0)
  const  [currentPageItems,setCurrentPageItems]=useState([])
  console.log(currentPageItems)
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=>setImages(json))
    
  },[])
  useEffect(()=>{

    if(currentPage===1 && images.length>1){
      let items=images.slice(0,5)
       setCurrentPageItems(items)
       }else{
         let items=images.slice(lastIndex,lastIndex+itemsPerPage)
         setCurrentPageItems(items)
       }
    },[images,currentPage])
    const modelHandler=(item)=>{
          setShowModel(true)
          setItem(item)
    }
    const pageHandler=()=>{
       setCurrentPage(prev=>{
         return  prev+1
       })
       setLastIndex(prev=>{
        return  prev+itemsPerPage
       })
    }
  return (
    <div>
         {
             currentPageItems.map((item)=>{
                return(
                    <div  key={item.id} onClick={()=>modelHandler(item)}>
                       <Item  model={showModel} item={item} id={item.id} image={item.image}/>
                    </div>
                )
             })
         }
         <button onClick={pageHandler}>next</button>
         <div>
             {
                showModel && createPortal(<Model item={item}/>,document.body)
             }
         </div>
    </div>
  )
}
