import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import currencyConverter from "../utils/currencyConverter";

export default function Product({product}) {

  return (
    <Link className="text-inherit no-underline" to={`/product-details/${product.id}`}>
      <div className=" border-[1px] border-solid border-[--primary-color-50] rounded-lg w-[300px] pb-[40px] overflow-hidden " >
        <div className="overflow-hidden">
          <img className={` h-[400px] w-[100%] hover:scale-108 hover:transition hover:duration-288`} src={product.imageUrl} />
        </div>
        <div className="font-[--font-section-header-familly] mt-[10px] pl-[20px]">
          <h1 className="text-2xl font-medium">{product.title}</h1>
          <p className="text-3xl font-semibold mt-2 text-[color:--primary-color-500]">
            {currencyConverter(product.price)}
          </p>
          {/* <p className={styles.priceDescription}>{product.description}</p> */}
        </div>
      </div>
    </Link>
  );
}
