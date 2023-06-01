import React from 'react'


export default function ProductTable(props) {
    
    let items=props.items
    const clickhandler=(link)=>{
          props.linkHandler(link)
    }
  return (
    <div>
        {
            items.map((item)=>{
                 return(
                    <div onCL key={item}>
                        {item.title}
                    </div>
                 )
            })
        }
    </div>
  )
}
