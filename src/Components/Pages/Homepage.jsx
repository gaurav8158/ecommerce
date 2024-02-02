import React, { useContext } from "react";
import Header from "../Header/Header";
import Filter from "../Filter/Filter";
import Items from "../Items/Items";

const Homepage = () => {
  return (
    <div>
      <Header />
      <div className="flex p-4">
        <Filter />
        <Items />
      </div>
    </div>
  );
};

export default Homepage;
