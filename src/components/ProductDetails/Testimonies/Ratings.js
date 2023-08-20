import React from "react";

import { ImStarEmpty } from "react-icons/im";
import {ImStarFull} from 'react-icons/im'

export default function Ratings({ stars, active }) {
  const starArray = Array.from({ length: stars }, (v, i) => i + 1);
  return (
    <ul className="flex gap-[5px] list-none">
      {starArray.map((item, i) => {
        return (
          <li key={i}>
            {i+1>active? <ImStarEmpty className="h-[20px] w-[20px]"  />:<ImStarFull className="h-[20px] w-[20px]" style={{fill:'gold'}}/>}
           
          </li>
        );
      })}
    </ul>
  );
}
