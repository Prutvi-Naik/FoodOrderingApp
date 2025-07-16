import { useState } from "react";
import ListItem from "./ListItem";

const ResturantCatagory =({data,showItem,setShowIndex})=>{
     const show=()=>{
        setShowIndex()
     }
    return(
        <div>
            
          {/* header */}
          <div className="w-6/12 bg-slate-300 mx-auto my-4 p-4  rounded-lg  shadow-md">
            <div className="flex justify-between font-bold text-lg pb-4  cursor-pointer" onClick={show}>
            <span>{data.title}  ({data.itemCards.length})</span>
            <span>⬇️</span>
            </div>
               { showItem &&<ListItem item= {data.itemCards}/>}
          </div>
        </div>
    )
}


export default ResturantCatagory;