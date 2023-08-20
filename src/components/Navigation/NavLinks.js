import NavLink from './NavLink'
import styles from './Navigation.module.css'
import React from 'react'

export default function NavLinks() {
  return (
    <div className="flex gap-[30px]">
        <NavLink name='Home' href='/'/>
        <NavLink name='About us' href='#'/>
        <NavLink  name='Log In' href="/login"/>
        <NavLink name='' href='#'/>
    </div>
  )
}
