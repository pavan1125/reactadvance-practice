import React from 'react'

export default function Item(props) {

    function modelHandler(item){
         console.log(item)
    }
  return (
    <div>
        <img onClick={()=>modelHandler(props.item)} style={{width:500,margin:10}} src={props.image}/>
    </div>
  )
}
