import Home,{loader as homeLoader} from "./components/Home"; 
import {RouterProvider,createBrowserRouter,createRoutesFromElements, Route} from "react-router-dom"
import Layout from "./components/Layout";
import About from "./components/About";
import Login,{action as loginAction} from "./components/Login";
import ProductDetail,{loader as productDetailLoader} from "./components/ProductDetail";


const router=createBrowserRouter(
   createRoutesFromElements(
         <Route path="/" element={<Layout/>}>
             <Route index element={<Home/>} loader={homeLoader}/>
             <Route path="about" element={<About/>}/>
             <Route path="login" element={<Login/>} action={loginAction}/>
             <Route path=":id" element={<ProductDetail/>} loader={productDetailLoader} />
         </Route>
   )
)
function App() {
  return (
     <RouterProvider router={router}/>
  );
}

export default App;
