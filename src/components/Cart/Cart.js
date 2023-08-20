import React, { useState } from "react";
import { braceletes } from "../assets/data";
import { useSelector } from "react-redux";
import styles from "./cart.module.css";
import { Link } from "react-router-dom";
import Quantity from "../ProductDetails/Quantity";
import { RiDeleteBin6Line } from "react-icons/ri";
import currencyConverter from './../utils/currencyConverter';

export default function Cart() {
    // const [quantity,setQuantity]=useState(0)
  const cart = useSelector((state) => state.cart.cartItems);
  let quantity
  function retriveQuantity(quant){
    quantity=quant;
    console.log(quantity);

  }
  const product = [];
  braceletes.forEach((bracelet) => {
    cart.forEach((item) => {
      if (item.id === bracelet.id) {
        console.log(item,bracelet);
        bracelet.quantity = (item.quantity);
        product.push(bracelet);
      }
    });
  });
//   console.log(product);

  return (
    <div className={`${styles.cartContainer} center`}>
      <div className={styles.headerContainer}>
        <h1 className={styles.header}>Your cart</h1>
        <Link to="/" className={styles.headerLink}>
          Continue shopping
        </Link>
      </div>
      <div className={styles.table}>
        <p>Product</p>
        <p>Quantity</p>
        <p>Total</p>
      </div>
      <hr className={styles.line}></hr>
      {product.map(item=>{
        return (

      <div className={styles.cartSubContainer}>
        <div className={styles.cart}>
          <div className={styles.imageContainer}>
            <img
              className={styles.img}
              src={item.image}
              alt="picture of a product"
            />
            <div>
              <h2>{item.title}</h2>
              <p>{currencyConverter(item.price)}</p>
            </div>
          </div>
          <div>
            <Quantity onRetriveQuantity={retriveQuantity} showHeader={true} />
          </div>
          <div>
            <p className={styles.price}>{currencyConverter(item.quantity*item.price)}</p>
          </div>
        </div>
        <hr className={styles.line}></hr>
        <RiDeleteBin6Line className={styles.deleteIcon} />
      </div>
        )
      })}
      <div>
        <div className={styles.totals}>
        <p>Subtotal:</p>
        <p>$345</p>

        </div>
        <Link to='/checkout' className={styles.checkoutBtn}>Checkout</Link>
      </div>

    </div>
  );
}
