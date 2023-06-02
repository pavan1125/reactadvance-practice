import React from "react"
import Home,{loader as homeLoader,action as HomeAction} from "./components/Home"; 
import {RouterProvider,createBrowserRouter,createRoutesFromElements, Route} from "react-router-dom"
import Layout from "./components/Layout";
import Login,{action as loginAction} from "./components/Login";
import {loader as ProductDetailLoader} from "./components/ProductDetail";
import { Cart } from "./components/Cart";
import Titles from "./components/Titles";
import Hello from "./components/Hello";

const ProductDetail=React.lazy(()=>import("./components/ProductDetail"))
const About=React.lazy(()=>import("./components/About"))
const router=createBrowserRouter(
   createRoutesFromElements(
           <>
      <Route path="/" element={<Layout/>}>
    
             <Route index element={<Home/>} loader={homeLoader} action={HomeAction}/>
             <Route path="about" element={<About/>}/>
             <Route path="login" element={<Login/>} action={loginAction}/>
             <Route path=":id" element={<ProductDetail/>} loader={ProductDetailLoader} />
             <Route path="cart" element={<Cart/>}/>
             <Route path="video" element={<Titles/>}/>
          
         </Route>
           </>
   )
)
function App() {
  return (
   <React.Suspense fallback={<h1>Loading.....</h1>}>
     <RouterProvider router={router}/>
    </React.Suspense>
  );
}

export default App;
