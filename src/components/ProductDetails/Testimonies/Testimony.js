import React from 'react'
import Ratings from './Ratings';


export default function Testimony({test}) {
  return (
    <div className="w-[400px] p-[20px]">
      <h1 className="text-center opacity-60 text-[16px]">{test.testimony}</h1>
      <div className="flex justify-between items-center mt-[1rem]">
        <Ratings stars={5} active={test.stars}/>
        <p className='text-[--secondary-200] text-[14px] font-bold'>{test.name}</p>
      </div>
    </div>
  )
}
