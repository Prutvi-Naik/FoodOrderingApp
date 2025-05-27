import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { MENU_API } from "../Util/constant";
import useResturant from "../Util/useResturant";

const ResturantMenu = () => {
 // Using custom hooks..
  const {ResId} = useParams()
  const resData = useResturant(ResId) 
  if (resData === null) return <Shimmer />;
    const resIN = resData.cards[2]?.card?.card?.info;
   const resMenu = resData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
  return (
    <div className="Menu">
      <h1>{resIN.name}</h1>
      <h3>{resIN.city}</h3>
      <h1>Menu</h1>
      <ul>
        {resMenu.map((menu) => {
         return<li key={menu.card.info.id}>{menu.card.info.name}</li>;
         
        })}
      </ul>
    </div>
  );
};

export default ResturantMenu;
