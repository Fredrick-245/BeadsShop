import React, { useState } from "react";

import Cards from "react-credit-cards-2";
import styles from "./credit.module.css";
import 'react-credit-cards/es/styles-compiled.css'
const Credit = () => {
  const [state, setState] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
    focus: "",
  });

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;

    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  };

  return (
    <>
    <div className={styles.cardContainer}>
      <Cards
        number={state.number}
        expiry={state.expiry}
        cvc={state.cvc}
        name={state.name}
        focused={state.focus}
      />
      <form className={styles.form}>
        <input
          type="number"
          name="number"
          id="cardnumber"
          placeholder="Card Number"
          value={state.number}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          autoComplete={true}
        />
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter your name here"
          value={state.name}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <div className={styles.valid}>
          <input
            type="number"
            name="expiry"
            id="expiry"
            placeholder="Expiry date"
            value={state.expiry}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
          <input
            type="number"
            name="cvc"
            id="cvc"
            placeholder="CVC"
            value={state.cvc}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
        </div>
      </form>
    </div>
      <button className="mt-[40px] bg-[--secondary-200] px-[20px] text-[white] text-[18px] rounded-[8px] py-[10px]">Checkout</button>
    </>

  );
};

export default Credit;
