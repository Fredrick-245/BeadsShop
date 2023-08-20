import React from 'react'
import styles from './loader.module.css'

export default function Loader() {
  return (
    <div className='h-[40vh] w-[100vw] flex items-center justify-center'>
        <div className={`${styles.loader} `}></div>
      
    </div>
  )
}
