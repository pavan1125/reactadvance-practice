import React, { useEffect, useState } from 'react'
import { Link,Outlet } from 'react-router-dom'
export default function Layout() {
   const [data,setData]=useState([])
   useEffect(()=>{
    async function fun(){
      const response=await fetch("https://fakestoreapi.com/products")
      const data=await response.json()
      setData(data)
    }
    fun()
   },[])
  return (
    <>
    <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>
        <Link to="/cart">see Cart</Link>
        <Link to="/video">see video</Link>
    </div>
    <div> 
        <Outlet context={{content:data}}/>
    </div>

    </>
  )
}
