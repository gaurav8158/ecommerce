import React, { useContext } from "react";
import Header from "../Header/Header";
import itemContext from "../Context/itemContext";
import Itemcard from "../Items/Itemcard";

const Cart = () => {
  const { cartItem, setCartItem } = useContext(itemContext);
  console.log(cartItem);
  const total = cartItem.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price,
    0
  );
  console.log(total);
  const handleDeleteCart = () => {
    setCartItem([]);
    localStorage.removeItem("cartdata");
  };
  return (
    <>
      <Header />
      <div className="mb-10 min-h-screen">
        {cartItem.length > 0 ? (
          <div className="flex flex-col md:flex-row m-auto max-w-screen-lg">
            <div className="w-full md:w-2/3 md:m-auto flex flex-wrap">
              {cartItem.length >= 0 &&
                cartItem?.map((val) => <Itemcard val={val} />)}
            </div>

            <div className="w-full md:w-1/3 ">
              <div className="my-5 p-5 bg-orange-200 text-black font-semibold rounded-md">
                <span>Want to clear Cart..??</span>
                <button
                  onClick={handleDeleteCart}
                  className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                >
                  Clear cart
                </button>
              </div>
              <div className="p-5 bg-orange-200 rounded-md">
                <p className="text-xl font-bold">Bill Details</p>
                <div className="flex justify-between ">
                  <span>number of items: </span>
                  {cartItem.length}
                </div>
                <div className="flex justify-between">
                  <span>Item Total</span>
                  <span>₹ {Math.floor(total)}</span>
                </div>
                <hr className="mt-5 border-slate-950" />
                <div className="mt-2 flex justify-between font-bold">
                  <span>TO PAY</span> <span>₹ {Math.floor(total)} /-</span>
                </div>
              </div>
              <div className="mt-2 flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                Checkout
              </div>
            </div>
          </div>
        ) : (
          <div className="py-2 px-10 text-slate-900 font-sans font-bold text-7xl h-screen flex justify-self-start items-center">
            Your Cart is empty please Add items in to cart...
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
