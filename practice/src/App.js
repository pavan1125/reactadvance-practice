import React from "react";
import ProductList from "./components2/ProductList";
import ProductTable from "./components2/ProductTable";

const videos = [
  {
    title: "redux",
    link: "http://192.168.100.114:8080/Video_Tutorials/React/React_The_Complete_Guide_incl_Hooks_ReactRouter_Redux/19%20-%20Advanced%20Redux/001%20Module%20Introduction.mp4",
  },
  {
    title: "next",
    link: "http://192.168.100.114:8080/Video_Tutorials/React/React_The_Complete_Guide_incl_Hooks_ReactRouter_Redux/22%20A%20%28Pretty%20Deep%20Dive%29%20Introduction%20to%20Next/001%20Module%20Introduction.mp4",
  },
];

function App() {
  const [link,setLink]=React.useState("http://192.168.100.114:8080/Video_Tutorials/React/React_The_Complete_Guide_incl_Hooks_ReactRouter_Redux/22%20A%20%28Pretty%20Deep%20Dive%29%20Introduction%20to%20Next/001%20Module%20Introduction.mp4")
  
  const linkHandler=(link)=>{
     setLink((prev)=>{
      
     })
  }
  console.log(link)
  return (  
            <>
            <ProductList link={link} />
           <div className="App">
            <ProductTable linkHandler={linkHandler} items={videos}/>
           </div>
            </>
  )
}

export default App;
