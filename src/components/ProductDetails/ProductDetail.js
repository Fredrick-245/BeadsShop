import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { braceletes } from "../assets/data";
import { LuShare } from "react-icons/lu";
import Quantity from "./Quantity";
import Testimonies from "./Testimonies/Testimonies";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/CartSlice";
import currencyConverter from "./../utils/currencyConverter";
import Loader from "../Loader/Loader";

export default function ProductDetail() {
  const [isLoading, setIsLoading] = useState(true);
  const [product, setCurrProduct] = useState({});
  const params = useParams();
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart.cartItems);
  // const product = braceletes.find((prod) => (prod.id = params.id));
  useEffect(() => {
    async function fetchProduct() {
      const res = await fetch(
        `http://localhost:800/products/getproduct/${params.id}`
      );
      const data = await res.json();
      setCurrProduct(data.data.product);
      setIsLoading(false)
    }
    fetchProduct();
  }, [params.id]);
  async function shareHandler(e) {
    const data = { url: window.location.href };
    await navigator.share(data);  
  }
  let quantity;
  function retriveQuantity(product, quant) {
    // quantity=quant
    product.quantity = quant;
    // console.log(qi);
    console.log(product);
  }

  function addToCartHandler() {
    dispatch(addToCart({ id: product.id, quantity: quantity }));
    console.log(cart);
  }
  const content = isLoading ? (
    <Loader/>
  ) : (
    <div className=" center my-[9.6rem] mx-[8rem]   flex gap-[20%]">
      <div className="rounded-[10px]">
        <img src={product?.imageUrl} className="rounded-[8px]" />
      </div>
      <div>
        <div>
          <p className="uppercase text-[1.4rem] opacity-50 mb-[1rem]">
            {product?.title}
          </p>
          <h1 className="text-[3.2rem] mb-[1rem]">{product?.title}</h1>
          <h1 className="text-[2.4rem] font-normal tracking-[1.2px]">
            {currencyConverter(product?.price)}
          </h1>
          <p className="mt-[2rem] text-[1.4rem] opacity-70">
            {product?.description}
          </p>
          <Quantity
            onRetriveQuantity={retriveQuantity.bind(this, product)}
            productQuantity={product?.quantity}
          />
          <button
            className="w-[100%] mt-[1rem] py-[10px] px-[2px] uppercase rounded-[8px] outline-none border-none bg-[--secondary-100] text-[#fff] text-[16px]"
            onClick={addToCartHandler}
          >
            Add to Cart
          </button>
          <button className="w-[100%] mt-[1rem] py-[10px] px-[2px] uppercase rounded-[8px] outline-none border-none bg-[--secondary-100] text-[#fff] text-[16px]">
            Checkout{" "}
          </button>
          <button
            onClick={shareHandler}
            className="mt-[2rem] border-none w-[100%] bg-none flex gap-[4px] justify-center text-[1.8rem] items-center"
          >
            <LuShare />
            Share
          </button>
        </div>
        <Testimonies testimonies={product?.testimony} />
      </div>
    </div>
  );

  // console.log(window.location.href);
  return(<>
  {content}
  </>);
}
