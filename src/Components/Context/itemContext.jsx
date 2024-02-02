import { createContext, useEffect, useState } from "react";
import { getData } from "../Function/getData";

const itemContext = createContext();

export const ItemProvider = ({ children }) => {
  const cartData = JSON.parse(localStorage.getItem("cartdata")) || [];
  const loggeduser = JSON.parse(localStorage.getItem("loggeduser")) || "";
  const [items, setItems] = useState([]);
  const [category, setCategory] = useState("");
  const [rating, setRating] = useState("");
  const [cartItem, setCartItem] = useState(cartData);
  const [loggedUser, setLoggedUser] = useState(loggeduser);
  console.log(category);
  useEffect(() => {
    getData(setItems);
  }, []);
  const handleAddcart = (additem) => {
    console.log(additem);
    const temp = JSON.parse(localStorage.getItem("cartdata")) || [];
    localStorage.setItem("cartdata", JSON.stringify([...temp, additem]));
    setCartItem([...temp, additem]);
  };
  console.log(cartData)
  return (
    <itemContext.Provider
      value={{
        items,
        setCategory,
        category,
        rating,
        setRating,
        loggedUser,
        setLoggedUser,
        cartItem,
        handleAddcart,
      }}
    >
      {children}
    </itemContext.Provider>
  );
};
export default itemContext;
