import React, { useState } from "react";
import { useRef } from "react";
import Testimony from "./Testimony";
import { BiCircle, BiSolidCircle } from "react-icons/bi";

export default function Testimonies({ testimonies }) {
  const [rotate, setRotate] = useState(0);
  const testimonyContainer = useRef();
  
  function jumpToTestimonyHandler(i) {
   
    setRotate((i*100));

  }
  const activeTestimony = rotate / 100;

  return (
    <div className="border-[1px] border-solid border-[#ddd] rounded-[8px] mt-[2rem] overflow-x-hidden transition-all duration-288 shadow-xl hover:shadow-lg">
      {/* <div className={styles.nextIcon} >
        <LiaGreaterThanSolid className={styles.controlIcon} />
      </div> 
       <div className={styles.prevIcon}>
        <LiaLessThanSolid
          className={styles.controlIcon}
          onClick={prevTestimonyHandler}
        />
      </div> */}

      <ul
        className="list-none mt-[2rem] flex gap-[20px] w-[423px] transition-all duration-200 ease-in-out rounded-[8px]"
        ref={testimonyContainer}
        style={{ transform: `translateX(-${rotate}%)` }}
      >
        {testimonies.map((testimony) => (
          <li key={testimony.name} >
            <Testimony test={testimony} />
          </li>
        ))}
      </ul>
      <div className="flex justify-center mb-[20px] gap=[.6rem] cursor-pointer">
        {testimonies.map((testimony, i) => {
          if (activeTestimony === i) {
            return (
              <BiSolidCircle
                className="h-[15px] w-[15px] text-[--secondary-200]"
                onClick={jumpToTestimonyHandler.bind(this, i)}
              />
            );
          } else {
            return (
              <BiCircle
                className="h-[15px] w-[15px] text-[--secondary-200]"
                onClick={jumpToTestimonyHandler.bind(this, i)}
              />
            );
          }
        })}
      </div>
    </div>
  );
}
