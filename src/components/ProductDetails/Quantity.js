import React, { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { increaseQuantity,decreaseQuantity } from "../store/QuantitySlice";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";

export default function Quantity({
  onRetriveQuantity,
  showHeader,
  productQuantity,
}) {
  const dispatch = useDispatch()
  const state = useSelector(state=>state.quantity.value)
  // const [quantity, setQuantity] = useState(productQuantity || 1);
  // useEffect(() => {
  //   onRetriveQuantity(quantity);
  // });
  function increseQuantity() {
    // setQuantity((prev) => prev + 1);
    dispatch(increaseQuantity())
    // onRetriveQuantity(quantity);
  }
  function decrementQuantity() {
    // if (quantity === 1) {
    //   return;
    // }
    // setQuantity((prev) => prev - 1);
    // onRetriveQuantity(quantity);
    dispatch(decreaseQuantity())
  }
  return (
    <div className="mt-[4rem]">
      <h1 className="opacity-80 mb-[1rem] text-[1.8rem]">
        {!!!showHeader && "Quantity"}
      </h1>

      <div className="flex items-center justify-between gap-[10px] border-[2px] border-solid border-[#999] w-[25%] p-[.8rem] rounded-[8px] mb-[4rem]">
        <AiOutlineMinus onClick={decrementQuantity} />
        <input
          className="w-[30%] p-[0.6rem] outline-none no-spin-btn text-[1.4rem]"
          type="number"
          value={state}
          onChange={() => {}}
        />
        <AiOutlinePlus onClick={increseQuantity} />
      </div>
    </div>
  );
}
