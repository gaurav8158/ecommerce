import React, { useContext } from "react";
import itemContext from "../Context/itemContext";

const Itemcard = ({ val }) => {
  const {cartItem, handleAddcart} = useContext(itemContext);
  return (

    <div className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
      <div className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl justify-center">
        <img
          className="object-cover hover:scale-105 transition-all ease-in-out"
          src={val.image}
          alt="product image"
        />
      </div>
      <div className="mt-4 px-5 pb-5">
        <h5 class="text-xl tracking-tight text-slate-900">
          {val?.title?.slice(0, 42)}
        </h5>

        <div class="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span class="text-3xl font-bold text-slate-900">${val?.price}</span>
          </p>
          <div class="flex items-center">
            <span class="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
              {val?.rating?.rate}
            </span>
          </div>
        </div>
        <div
         onClick={()=>handleAddcart(val)}
          class="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="mr-2 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          Add to cart
        </div>
      </div>
    </div>
  );
};

export default Itemcard;
