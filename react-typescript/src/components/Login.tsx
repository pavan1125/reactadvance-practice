import React from 'react'
import {ActionFunctionArgs, Form, redirect} from 'react-router-dom'
const Login:React.FC=()=> {
  return (
    <div>
        <Form method='post'>
             <label htmlFor='email'>Email</label>
            <input type="text" name="email" id="email" />
            <label htmlFor='password'>password</label>
            <input type="text" name="password" id="password" />
             <button>submit</button>
        </Form>
    </div>
  )
}

export const action=async (obj:ActionFunctionArgs):Promise<any>=>{
      const formData=await obj.request.formData()
      const email=formData.get("email")
      const password=formData.get("password")
      console.log(email,password)
      return redirect("/")
}

export default Login