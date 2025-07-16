import { LOGO_URL } from "../Util/constant";
import { useState } from "react";
import { data, Link } from "react-router";
import useNetwork from "../Util/useNetwork";
import UserContext from "../Util/UserContext";
import { useContext } from "react";
import { useSelector } from "react-redux";
const Header =() => {
   const [btn,resbtn] = useState("login");
   const onlineStatus = useNetwork();
   const data = useContext(UserContext)
   const cartItems = useSelector((store)=>store.cart.item)
   console.log(cartItems)
    return(
       <div className="flex justify-between bg-slate-100/50 shadow-lg sticky top-0">
          <div className="logo-container ml-4 my-2">
            <img className="w-28 rounded-lg shadow-lg" src={LOGO_URL} alt="Logo" />  
        </div>
          <div className="flex items-center">
            <ul className="flex font-[1000]">
             <li className="px-3">Online:{onlineStatus?"✅":"🔴"}</li>
             <li className="px-3"><Link to="/">Home</Link></li>
             <li className="px-3"><Link to="/about">About</Link></li>
             <li className="px-3"><Link to="/crosaury">Crosaury</Link></li>
             <li className="px-3"><Link to="/contact">Contact</Link></li>
             <li className="px-3"><Link to="/cart">🛒 - ({cartItems.length}-Items)</Link></li>
             <button className="mr-4 border-2 border-black px-2 rounded-lg capitalize bg-pink-500" onClick={
               ()=>{
                  btn==="login"? resbtn("logout"):resbtn("login");
               }
             }>{btn}</button>
             <li className="capitalize text-red-400 font-[100]">{data.username}</li>
            </ul>
          </div>
       </div>
    );
 }
 
 export default Header;


          
