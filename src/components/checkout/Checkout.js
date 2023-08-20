import React from "react";
import styles from "./checkout.module.css";
import Credit from "./Credit";

export default function Checkout() {
  return (
    <div className={`${styles.container} center`}>
      <h1 className={styles.header}>Checkout</h1>
      <div className={styles.subContainer}>
        <div className={styles.address}>
            <h1>Details:</h1>

          <div className={styles.input}>
            <label htmlFor="name" >Full Name:</label>
            <input id="name" type="text" required={true} placeholder="Annuarite Nyaruwai"></input>
          </div>
          <div className={styles.input}>
            <label htmlFor="email">Email:</label>
            <input type="email" requires={true} id='email' placeholder="annu@gmail.com"></input>
          </div>
          <div className={styles.input}>
            <label htmlFor="address">Address:</label>
            <input type="text" id="address" placeholder="Alozi Estate Road,Off Thika Road near Quickmart Supermarket"></input>
          </div>
          <div className={styles.input}>
            <label htmlFor="county">County:</label>
            <input type="text" id="county" placeholder="Nairobi" required={true}></input>
          </div>
          <div className={styles.input}>
            <label htmlFor="town">Town:</label>
            <input type="text" id="town" placeholder="Githurai" required={true}></input>
          </div>
          <div className={styles.input}>
            <label htmlFor="apartment">Apartment:</label>
            <input type="text" id="apartment" placeholder="Imani Apartment" required={true}></input>
          </div>
          <div className={styles.input}>
            <label htmlFor="number">Phone Number:</label>
            <input type="number" placeholder="0741954679" id="number" max={4} required={true}></input>
          </div>
        </div>
        <div className={styles.separate}>

        </div>
        <div className={styles.payment}>
            <h1>Payment:</h1>
            <div className={styles.promptContainer}>
                <h2>Use Mpesa:</h2>

            <div className={styles.prompt}>
                <button>Prompt me the Amount</button>
            </div>
            </div>
            <div className={styles.credit}>
                <h2>Use credit card&nbsp;:</h2>
                <Credit/>
            </div>
        </div>
      </div>
    </div>
  );
}
