import React from 'react'
import AdminLinks from '../AdminLinks'
import { Outlet } from 'react-router'

export default function ProductsAdmin() {
  return (
    <>
    <div className='flex flex-col items-center gap-[10px]'>
      <AdminLinks to={'addproduct'}>Add a Product</AdminLinks>
      <AdminLinks to={'editproduct'}>Edit a Product</AdminLinks>
      <AdminLinks to={'deleteproduct'}>Delete a product</AdminLinks>
      
    </div>
    <Outlet/>
    </>
  )
}
