import React, { useState } from "react";
import styles from "./filter.module.css";
import { BiCheckboxChecked } from "react-icons/bi";
import { BiSquare } from "react-icons/bi";

export default function Filter({ type, style }) {
  const [filterIsChecked, setFilterIsChecked] = useState(false);
  const [sortIsChecked, setSortIsChecked] = useState(false);
  return (
    <div
      className={`${styles.filter} w-[400px] h-[200px] absolute left-[40%] top-[200%] z-5 bg-[#fff]  border-[1px] border-[#999] rounded-lg`}
      style={style}
    >
      <div className="p-5 flex justify-between align-middle mb-[10px]">
        <h1 className="text-[16px]">
          {type === "filter" ? "Filter by availability" : "Sort by price"}
        </h1>
        <button className="border-none underline bg-none text-[14px] opacity-80 ">
          Reset
        </button>
      </div>
      <hr />
      {type === "filter" && (
        <div className="p-[20px]">
          <div className="flex items-center gap-[10px] mt-[5px]">
            {!filterIsChecked && (
              <BiSquare
                className="h-[20px] w-[20px]"
                onClick={() => setFilterIsChecked(true)}
              />
            )}
            {filterIsChecked && (
              <BiCheckboxChecked
                className="h-[20px] w-[20px]"
                onClick={() => setFilterIsChecked(false)}
              />
            )}
            <p className="opacity-80">In stock(10)</p>
          </div>
          <div className="flex items-center gap-[10px]">
            {!sortIsChecked && (
              <BiSquare
                className="h-[20px] w-[20px]"
                onClick={() => setSortIsChecked(true)}
              />
            )}
            {sortIsChecked && (
              <BiCheckboxChecked
                className="h-[20px] w-[20px]"
                onClick={() => setSortIsChecked(false)}
              />
            )}
            <p className="opacity-80">Out of Stock(10)</p>
          </div>
        </div>
      )}
      {type === "sort" && (
        <div className="h-[80%] flex items-center content-center">
          {/* <div className={styles.filterHeader}>
            <h1>{title}</h1>
            <button>Reset</button>
          </div> */}
          <div className="max-h-[100%]">
            <form className="opacity-80 flex gap-[2rem] max-h-[100%] items-center content-center px-[20px]">
              <label className="text-[1.6rem] font-bold " htmlFor="min">From:</label>
              <input className="outline-none w-[20%] py-[10px] px-[5px] text-[2rem] placeholder:opacity-40" placeholder="From" type="number" id="min" />
              <label className="text-[1.6rem] font-bold "  htmlFor="max">To:</label>
              <input className="outline-none w-[20%] py-[10px] px-[5px] text-[2rem] placeholder:opacity-40" placeholder="To" type="number" id="max" />
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
