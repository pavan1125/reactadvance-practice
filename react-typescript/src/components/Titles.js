import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { VideoActions } from "../store/store";
import { useOutletContext } from 'react-router-dom';
export default function Titles() {
  const data = useSelector((state) => state.video);
  const Outletdata=useOutletContext()
  console.log(Outletdata)
 
  const dispatch = useDispatch();
  const LinkHandler=(link)=>{
      dispatch(VideoActions.addLink(link))
  }
  return (
    <div>
      {data.Videos.map((item) => {
        return <button key={item.link} onClick={()=>LinkHandler(item.link)}>{item.title}</button>;
      })}
      <div>
         <video width="320" height="240" src={data.Link} controls />
      </div>
    </div>
  );
}
