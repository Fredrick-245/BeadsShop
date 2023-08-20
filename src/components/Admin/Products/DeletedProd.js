import React from "react";
import currencyConverter from "../../utils/currencyConverter";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiFillEdit } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function DeletedProd({ product, edit }) {
  async function itemDeleteHandler() {
    const deleteItem = window.confirm(
      `Are your sure your want to delete the selected item?`
    );
    const body = {
      id: product._id,
    };
    if (deleteItem) {
      const deletedItem = await fetch(
        `http://localhost:800/products/deleteproduct`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        }
      );
    }
  }
  return (
    <div className="border-[#000] border-[1px] rounded-[10px] overflow-hidden">
      <div>
        <img
          className="w-[100%] h-[90%]"
          src={product.imageUrl}
          alt={product.description}
        />
      </div>
      <div className="p-[10px]">
        <h1 className="text-[20px]">{product.title}</h1>
        <p className="text-[15px]">{currencyConverter(product.price)}</p>
      </div>
      <div className="p-[10px] flex items-center justify-center">
        {edit ? (
          <Link to={`${product._id}`}>
            <AiFillEdit
              className="w-[20px] h-[20px]"
              onClick={() => {
                window.scrollTo({ top: 200, left: 0, behavior: "smooth" });
              }}
            />
          </Link>
        ) : (
          <RiDeleteBin6Line
            className="w-[20px] h-[20px]"
            onClick={itemDeleteHandler}
          />
        )}
      </div>
    </div>
  );
}
