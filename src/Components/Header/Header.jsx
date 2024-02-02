import React, { useContext } from "react";
import { Link } from "react-router-dom";
import itemContext from "../Context/itemContext";
import { MdLogout } from "react-icons/md";
import { CiShoppingCart } from "react-icons/ci";
const Header = () => {
  const { loggedUser, setLoggedUser } = useContext(itemContext);
  const handleLogout = () => {
    localStorage.removeItem("loggeduser");
    setLoggedUser("");
  };
  return (
    <div className="p-4 shadow flex justify-between">
      <Link to="/">
        <h1 className="font-bold text-2xl">Meshop</h1>
      </Link>
      <div className="flex gap-2">
        <ul className="flex gap-2 items-center">
          {loggedUser ? (
            <>
              <MdLogout onClick={handleLogout} className="mt-1" />
              <li>{loggedUser}</li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">Register</Link>
              </li>
            </>
          )}
          <Link to="/cart">
            <CiShoppingCart />
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
