import React, { useContext } from "react";
import { FaSearch } from "react-icons/fa";
import itemContext from "../Context/itemContext";
import Itemcard from "./Itemcard";

const Items = () => {
  const { sort, items, setCategory, category, rating } =
    useContext(itemContext);
  console.log(items);
  console.log(category);
  // const sortFilter = (sort==="low") ?
  if (sort === "low") {
    items.sort((a, b) => a.price - b.price);
  } else if (sort === "high") {
    items.sort((a, b) => b.price - a.price);
  }
  const ratingFilter =
    rating === ""
      ? [...items]
      : items.filter((val) => val.rating.rate >= rating);
  const filteredArr =
    category === ""
      ? [...ratingFilter]
      : ratingFilter.filter((val) => val.category === category);
  console.log(filteredArr);
  return (
    <div className="w-full">
      <div className="flex flex-col">
        <div className="relative w-full mt-2">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center cursor-pointer">
            <FaSearch className="text-gray-400" />
          </div>
          <input
            placeholder="Search Item..."
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-slate-50 text-gray-900 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
            type="text"
          />
        </div>
        <div className="flex mt-2 gap-2 flex-wrap">
          <div
            onClick={() => setCategory("")}
            className="p-2 rounded-md bg-slate-100 hover:bg-slate-50 font-semibold"
          >
            All Items
          </div>
          <div
            onClick={() => setCategory("men's clothing")}
            className="p-2 rounded-md bg-slate-100 hover:bg-slate-50 font-semibold"
          >
            Men's Clothing
          </div>
          <div
            onClick={() => setCategory("women's clothing")}
            className="p-2 rounded-md bg-slate-100 hover:bg-slate-50 font-semibold"
          >
            Women's Clothing
          </div>
          <div
            onClick={() => setCategory("jewelery")}
            className="p-2 rounded-md bg-slate-100 hover:bg-slate-50 font-semibold"
          >
            Jewellery
          </div>
          <div
            onClick={() => setCategory("electronics")}
            className="p-2 rounded-md bg-slate-100 hover:bg-slate-50 font-semibold"
          >
            Electronics
          </div>
        </div>
      </div>
      <div className="flex  flex-wrap w-full justify-around">
        {filteredArr.length !== 0 &&
          filteredArr?.map((val) => (
            <Itemcard val={val} key={filteredArr.id} />
          ))}
      </div>
    </div>
  );
};

export default Items;
