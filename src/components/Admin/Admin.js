import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Admin() {
  return (
    <div className='center'>
        <h1 className='text-[30px] uppercase'>Admin</h1>
        <div className='flex gap-[10px] mt-[40px] items-center justify-center'>
            <Link className='bg-[--secondary-200] py-[8px] px-[20px] text-[18px] text-[#fff] uppercase opacity-90 rounded-[6px]'>Products</Link>
            <Link className='bg-[--secondary-200] py-[8px] px-[20px] text-[18px] text-[#fff] uppercase opacity-90 rounded-[6px]'>Users</Link>
            <Link className='bg-[--secondary-200] py-[8px] px-[20px] text-[18px] text-[#fff] uppercase opacity-90 rounded-[6px]'>Orders</Link>
            <Link className='bg-[--secondary-200] py-[8px] px-[20px] text-[18px] text-[#fff] uppercase opacity-90 rounded-[6px]'>Statistics</Link>
        </div>
        <hr className='my-[30px] opacity-40'></hr>
        <div className='mb-[100px]'>
      <Outlet/>

        </div>

    </div>
  )
}
