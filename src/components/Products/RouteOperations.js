import React from "react";
import { AiOutlineDown } from "react-icons/ai";
import { useState } from "react";
import Filter from "./Filter";

export default function RouteOperations() {
  const [sortFilter, setSortFilter] = useState(false);
  const [showPrice, setShowPrice] = useState(false);
  // console.log(showFilter)
  return (
    <div className="flex justify-between mt-[20px]">
      <div className="flex gap-[40px] relative">
        <p className="text-[2rem]">Filter By:</p>
        <div
          className="flex items-center cursor-pointer gap-[3px]"
          onClick={() => {
            setSortFilter((prev) => !prev);
            setShowPrice(false);
          }}
        >
          <p className="text-[1.4rem] opacity-80">Availability</p>
          <AiOutlineDown className="h-[15px] w-[15px]" />
        </div>
        {sortFilter && (
          <Filter
            style={!sortFilter ? { animation: "slideOut .3s ease-out" } : {}}
            type="filter"
          />
        )}
        <div
          className="flex items-center cursor-pointer gap-[3px]"
          onClick={() => {
            setShowPrice((prev) => !prev);
            setSortFilter(false)
          }}
        >
          <p className="text-[1.4rem] opacity-80">Price</p>
          <AiOutlineDown className="h-[15px] w-[15px]" />
        </div>
        {showPrice && (
          <Filter
            style={!showPrice ? { animation: "slideOut .3s ease-out" } : {}}
            type="sort"
          />
        )}
      </div>
      <div className="flex items-center gap-[1.5rem]">
        <div className="flex items-center gap-[10px]">
          <p className="text-[1.4rem] opacity-80">Sort By:</p>
          <div >
            <select className="outline-none py-[6px] px-[3px] text-[1.4rem]">
              <option className="text-[1.4rem]">All</option>
              <option className="text-[1.4rem]">Crystall bracelets</option>
              <option className="text-[1.4rem]">Evil eye bracelets</option>
              <option className="text-[1.4rem]">Charm bracelets</option>
              <option className="text-[1.4rem]">Pearl bracelets</option>
              <option className="text-[1.4rem]">Matching bracelets</option>
            </select>
          </div>
        </div>
        <p className="opacity-80 text-[1.4rem]">100 products </p>
      </div>
    </div>
  );
}
