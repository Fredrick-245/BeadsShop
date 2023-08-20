import React from 'react'
import Form from './Form'

export default function Login() {
  return (
    <div className="h-[100vh] w-[100vw] flex flex-col gap-[2rem] justify-center items-center bg-[--primary-color-100]">
        <h1 className='text-center text-[--primary-color-500] text-[1.8rem]'>Hey there!Am Annuarite. <br/> Wanna make me your Jewel Plug?&nbsp;Sighn/Login up below</h1>
      <Form/>
    </div>
  )
}
