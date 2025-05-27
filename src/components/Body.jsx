import CardData from "./CardData";
// import resObj from "../Util/mockdata";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useNetwork from "../Util/useNetwork";

const Body = () => {
  const [listOfRes, setListOfRes] = useState([]);
  const [FilterRes, setFilterRes] = useState([]);
  const [searchText,setsearchText]=useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.4087934&lng=76.5603828&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await response.json();

    // Extract RESTAURANT data (not categories)
    const restaurantData = json?.data?.cards?.find(
      (card) => card?.card?.card?.id === "top_brands_for_you"
    )?.card?.card?.gridElements?.infoWithStyle?.restaurants;

   //  if (restaurantData) {
      setListOfRes(restaurantData);
      setFilterRes(restaurantData);
   //  }
  };

  const filterTopRated = () => {
    const filteredList = listOfRes.filter((res) => res.info?.avgRating >= 4.4);
    setListOfRes(filteredList);
  };
  const onlineStatus = useNetwork();
 if(onlineStatus === false)return<h1>Internet loss ! Chaeck Internet</h1>

  if (listOfRes.length===0){
     return <Shimmer />
  }

  return (
    <div className="body">
      <div className="flex m-4">
         <input type="text" className=" border border-black text-center " value={searchText} onChange={(e)=>{
            setsearchText(e.target.value)
         }} placeholder="Search Item"></input>
         <button className="border border border-black rounded-lg mx-2 px-2 bg-pink-500 capitalize" onClick={()=>{
            console.log(searchText);
            const filterData = listOfRes.filter((resData)=>{
             return  resData.info.name.toLowerCase().includes(searchText.toLowerCase())
            }
         );
         setFilterRes(filterData)
      }
      }>search</button>
        <button className="border border border-black rounded-lg mx-2 px-2 bg-pink-500 capitalize" onClick={filterTopRated}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="flex flex-wrap h-full">
        {FilterRes.map((resData) => (
         <Link to={"/resturant/"+resData.info.id}key={resData.info.id}> <CardData resData={resData} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
