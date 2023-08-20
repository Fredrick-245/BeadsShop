import React from 'react'
import styles from './Navigation.module.css'
import { Link } from 'react-router-dom'

      

export default function NavLink({name,href,onClick}) {
  return (
    <div>
        <Link className="text-[20px] uppercase text-[#fff] hover:text-[--primary-color-50]" to={href} onClick={onClick}>{name}</Link>
    </div>
  )
}
