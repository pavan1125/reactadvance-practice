import React from 'react'
import {Link,Outlet} from "react-router-dom"
export default function Header() {
  return (
    <>
    <div>
        <Link to="/page">userPage</Link>
        <Link to="/profile">profile</Link>

    </div>
    <div>
         <Outlet/>
    </div>
    </>
  )
}
