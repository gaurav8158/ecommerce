import React, { useContext } from "react";
import Header from "../Header/Header";
import itemContext from "../Context/itemContext";
import Itemcard from "../Items/Itemcard";

const Cart = () => {
  const { cartItem, handleAddcart } = useContext(itemContext);
  console.log(cartItem);
  return (
    <>
      <Header />
      <div>
        
      </div>
      {cartItem.length >= 0 &&
        cartItem?.map((val) => <Itemcard val={val} />
        )}
    </>
  );
};

export default Cart;
