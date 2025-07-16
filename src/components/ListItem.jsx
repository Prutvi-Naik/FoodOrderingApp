import { useDispatch } from "react-redux";
import { CDN_URL } from "../Util/constant";
import { addItem } from "../Util/cartSlice";

const ListItem = ({ item }) => {
  console.log(item)
  const dispatch = useDispatch()
  const handleaddItem = ()=>{
    dispatch(addItem(item))
  }


  return (
    <div>
      {item?.map((item) => (
        <div
          key={item?.card?.info?.id ||item?.card?.info?.name}
          className="text-left border-b-2 border-indigo-500 py-2 px-4 flex justify-between"
        >
          <div className="">
            <span className="font-bold">{item?.card?.info?.name}-</span>
            <span className="font-bold">₹{item?.card?.info?.price / 100}</span>
            <p className="text-sm">{item?.card?.info?.description}</p>
          </div>
          <div className="space-x-4">
            <div className="h-20 w-20 ">
              <button className="absolute px-2 rounded-sm bg-black text-white cursor-pointer" 
               onClick={()=>handleaddItem(item)}
              >Add +</button>
              <img
                src={CDN_URL + item?.card?.info?.imageId}
                alt="item"
                className="w-48 h-full object-cover rounded"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ListItem;
