import React, { useEffect, useState } from "react";
import Loader from "../../Loader/Loader";
import DeletedProd from "./DeletedProd";

export default function DeleteProduct() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const res = await fetch("http://localhost:800/products/allproducts");
      const products = await res.json();
      setData(products.data.products);
      setIsLoading(false);
    }
    fetchData();
  }, []);
  const content = isLoading ? (
    <Loader />
  ) : (
    <ul className="flex mt-[4rem] flex-wrap gap-[20px]">
      {data.map((item) => {
        return <li  className="w-[300px] rounded-[8px] " key={item._id}><DeletedProd product={item}/></li>;
      })}
    </ul>
  );

  return (
    <div>
      <h1 className="text-[24px] mt-[4rem ]">Delete A Product</h1>

      {content}
    </div>
  );
}
