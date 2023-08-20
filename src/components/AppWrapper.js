import React, { useEffect } from "react";
import Navigation from "./Navigation/Navigation";
import { useRef } from "react";
import { Outlet } from "react-router";
import Footer from "./Footer/Footer";
import Search from "./Search/Search";
import Cart from "./Cart/Cart";


export default function AppWrapper() {
  const bodyRef=useRef()
  useEffect(()=>{
    const observerOptions={
      rootmargin:'10px',
      threshold:0.4
    }
    function observerCallback(entry){
      console.log(entry);
    }
    const observer = new IntersectionObserver(observerCallback,observerOptions)
    observer.observe(bodyRef.current)
    // return ()=> observer.unobserve(bodyRef.current)
  },[bodyRef])
  return (
    <div>
      <Navigation />
      <div ref={bodyRef}>
      <Outlet />
      <Footer />
      </div>
    </div>
  );
}
