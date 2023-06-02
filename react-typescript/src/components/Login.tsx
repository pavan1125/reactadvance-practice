import React from 'react'
import {ActionFunctionArgs, Form,useNavigate, useSearchParams,useLocation} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { AuthActions } from '../store/store'
const Login:React.FC=()=> {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  // const data:any=useActionData()
  // console.log(data)
  const loginHandler=(e:any)=>{
       e.preventDefault()
       dispatch(AuthActions.setLogin("pavan"))
       navigate("/")
  }
  const [params,setParams]=useSearchParams()
  const message=params.get("message")
  const location=useLocation()
  console.log(location)
  return (
    <div>
         {
           message && <h1>{message}</h1>
         }
        <Form method='post'>
             <label htmlFor='email'>Email</label>
            <input type="text" name="email" id="email" />
            <label htmlFor='password'>password</label>
            <input type="text" name="password" id="password" />
             <button onClick={loginHandler}>submit</button>
        </Form>
    </div>
  )
}

export const action=async (obj:ActionFunctionArgs):Promise<any>=>{
      const formData=await obj.request.formData()
      const email=formData.get("email")
      const password=formData.get("password")
      
      return {email,password}
}

export default Login