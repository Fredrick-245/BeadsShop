import React from 'react'
import { Link } from 'react-router-dom'

export default function AdminLinks({children,to}) {
  return (
    <Link className='bg-[--secondary-100] py-[5px] px-[30px] w-[20%] text-center rounded-[10px] text-[#fff] text-[16px]' to={to}>
      {children}
    </Link>
  )
}
