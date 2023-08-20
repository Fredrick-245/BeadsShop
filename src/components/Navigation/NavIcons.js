import React from "react";
import styles from './Navigation.module.css'
import { useSelector } from "react-redux";
import { BsCart } from "react-icons/bs";
import {TfiLocationPin} from "react-icons/tfi"
import { Link } from "react-router-dom";
import {RiAdminLine} from 'react-icons/ri'

export default function NavIcons({ name }) {
  const cart = useSelector((state) => state.cart.cartItems);

  return (
    <div className="flex gap-[50px] text-[#fff]">
      <div className="relative">
        <Link className={styles.iconLink} to='/cart'>
        <BsCart className="h-[30px] w-[30px]" />
        </Link>
        <p className="bg-[--tertiary-200] absolute w-[20px] h-[20px] top-[-5px] right-[-10px] text-[#fff] text-[16px] text-center rounded-full ">{cart.length}</p>
      </div>
      <Link to='/track-location' className="text-[inherit]">
      <TfiLocationPin className="h-[30px] w-[30px]"/>
       </Link>
      <Link to='/admin' className="text-[inherit]">
      <RiAdminLine className="h-[30px] w-[30px]"/>
       </Link>
    </div>
  );
}
