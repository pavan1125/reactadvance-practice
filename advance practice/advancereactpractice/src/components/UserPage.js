import React,{useContext} from 'react'
import { Context } from './context'

export default function UserPage() {
    const data=useContext(Context)

    console.log(data)
  return (
    <>
    <div>
        <h1>userPage</h1>
    </div>
    </>
  )
}
