import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { MENU_API } from "../Util/constant";
import useResturant from "../Util/useResturant";
import ResturantCatagory from "./ResturantCatagory";

const ResturantMenu = () => {
 // Using custom hooks..
  const [showIndex,setShowIndex] = useState()
  const {ResId} = useParams()
  const resData = useResturant(ResId) 
  if (resData === null) return <Shimmer />;
    const resIN = resData.cards[2]?.card?.card?.info;
    const resMenu = resData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
   const categories = resData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c =>c.card.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
);


  return (
    <div className="text-center">
  <div>
    <h1 className="font-bold text-3xl text-red-400 ">{resIN.name}</h1>
    <h3 className="text-lg text-red-900">{resIN.city}</h3>
  </div>
  {categories.map((category,index) => (
  <ResturantCatagory 
    key={category?.card?.card?.categoryId || Math.random()} 
    data={category?.card?.card}
    showItem={index===showIndex && true}
    setShowIndex = {()=>setShowIndex(index)}
  />
))}
</div>
   
  );
};

export default ResturantMenu;
