import React from 'react'
import { Link,Outlet } from 'react-router-dom'
export default function Layout() {
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
        <Outlet/>
    </div>

    </>
  )
}
