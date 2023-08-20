import React, { useEffect, useState } from "react";
import RouteOperations from "./RouteOperations";
import { braceletes } from "../assets/data";
import ProductItem from "../Models/Product";
import Product from "./Product";
import Search from "../Search/Search";
import { click } from "@testing-library/user-event/dist/click";
import Loader from "../Loader/Loader";
export default function Products() {
  const [data,setData]=useState()
  const [isLoading,setIsLoading]=useState(true)
  useEffect(()=>{
    async function fetchData(){
      setIsLoading(true)
      const res = await fetch("http://localhost:800/products/allproducts")
      const products = await res.json()
      setData(products.data.products)
      setIsLoading(false)
    }
    fetchData()
  },[])
  const content=isLoading?<Loader/>:(
    <ul className="grid grid-cols-4 overflow-x-scroll gap-y-[4rem] mt-[6rem] gap-[1rem] list-none no-scrollbar w-[100vw] ">
    {data.map((prod) => {
      const newProduct = new ProductItem(
        prod.imageUrl,
        prod.title,
        prod.price,
        prod.quantity,
        prod.description,
        prod.size,
        prod._id,
        prod.testimony
      );
      return<li className="w-[300px]" key={prod._id}><Product product={newProduct} /></li> ;
    })}
  </ul>

  )
  return (
    <section className="center">
      <Search/>

      <h1 className="text-[32px] font-[--font-setion-header-familly]">Beaded bracelets</h1>
      <p className="mt-[10px] text-[20px] opacity-80">
        All custom made beaded bracelets in this collection
      </p>
      <hr className="mt-[2rem]"></hr>
      <RouteOperations />
      <div className="no-scrollbar overflow-x-scroll">

      {content}
        </div>

  
    </section>
  );
}
