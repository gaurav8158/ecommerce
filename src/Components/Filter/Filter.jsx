import React, { useContext, useState } from "react";
import itemContext from "../Context/itemContext";

const Filter = () => {
  const [open, setOpen] = useState(false);
  const [openSort, setOpenSort] = useState(false);
  const { setRating, sort, setSort } = useContext(itemContext);
  return (
    <div className="w-full sm:w-1/4 shadow m-2 p-2">
      <h2 className="font-semibold">Filter</h2>
      <div>
        <button
          onClick={() => setOpen((prev) => !prev)}
          class=" bg-slate-100 hover:bg-slate-50 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-sm w-full justify-between px-4 py-2 text-center inline-flex items-center "
        >
          Rating{" "}
          <svg
            class="w-2.5 h-2.5 ms-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>
        {open ? (
          <div class="z-10 bg-white divide-y divide-gray-100 rounded-lg shadowdark:bg-gray-700">
            <ul
              class="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDefaultButton"
            >
              <li
                onClick={() => setRating(4)}
                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                4 & above
              </li>
              <li
                onClick={() => setRating(3)}
                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                3 & above
              </li>
              <li
                onClick={() => setRating(2)}
                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                2 & above
              </li>
              <li
                onClick={() => setRating("")}
                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Reset
              </li>
            </ul>
          </div>
        ) : (
          ""
        )}
      </div>

      <div>
        <button
          onClick={() => setOpenSort((prev) => !prev)}
          class="mt-2 bg-slate-100 hover:bg-slate-50 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-sm w-full justify-between px-4 py-2 text-center inline-flex items-center "
        >
          Sort by price{" "}
          <svg
            class="w-2.5 h-2.5 ms-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>
        {openSort ? (
          <div class="z-10 bg-white divide-y divide-gray-100 rounded-lg shadowdark:bg-gray-700">
            <ul
              class="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDefaultButton"
            >
              <li
                onClick={() => setSort("low")}
                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                low to high
              </li>
              <li
                onClick={() => setSort("high")}
                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                high to low
              </li>
            </ul>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Filter;
