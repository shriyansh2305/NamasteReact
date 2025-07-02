import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { CDN_URL } from "../utils/constants";
import { clearCart } from "../utils/cartSlice";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
//   const store = useSelector((store) => store);
//   const cartItems = store.cart.items;
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  }
  return (
    <div className="text-center m-4 p-4 ">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-1/2 m-auto">
        <button className="border-2 p-2 m-2 bg-black text-white rounded-lg" 
        onClick={handleClearCart}>Clear Cart</button>
        {cartItems.length===0 && <h1>Your Cart is Empty. Add Items to the Cart!</h1>}
        <ItemList items={cartItems}></ItemList>
      </div>
    </div>
  );
};

export default Cart;
