import { useSelector } from "react-redux";
import CartList from "./CartList";
import ListItem from "./ListItem";


const Cart = ()=>{
    const cartItems = useSelector((store)=>store.cart.item)
    console.log(cartItems)
    return (
        <div className="text-center m-2 p-2" >
            <h1 className="font-bold text-2xl">
                cart:
            </h1>
            <div>
                <ListItem item= {cartItems} />
            </div>
        </div>
    )
}

export default Cart;