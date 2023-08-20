import React, { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";

export default function Form({ type }) {
  const [formData,setFormData]=useState({
    firstname:'',
    secondname:'',
    email:'',
    password:'',
    confirmPassword:''
  })
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [sighnUp, setSighnUp] = useState(false);
  async function submitFormHandler(e){
    e.preventDefault()
    // console.log(formData);]
    try{

      const newUser = await fetch(`http://localhost:800/users/sighnup`,{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(formData)
      })
    } catch(err){
      console.log(err);
    }
  }
  return (
    <div>
      <div
        className="bg-[--secondary-100] shadow-2xl py-[6rem] px-[2rem] transition-all duration-200 rounded-[8px] hover:shadow-md"
        style={{ animation: `${sighnUp && "reduceSize .2s ease"}` }}
      >
        <form className="grid grid-cols-form gap-[2rem] items-center" onSubmit={submitFormHandler}>
          {sighnUp && (
            <>
              <label className="text-[1.6rem]">First Name:</label>
              <input
                className="p-[1rem] outline-none text-[1.6rem] rounded-[6px] border-none bg-[--primary-color-10] w-[100%]"
                placeholder="Annuarite"
                onChange={(e)=>setFormData({...formData,firstname:e.target.value})}
                type="text"
              ></input>
            </>
          )}
          {sighnUp && (
            <>
              <label className="text-[1.6rem]">Second Name:</label>
              <input
                className="p-[1rem] outline-none text-[1.6rem] rounded-[6px] border-none bg-[--primary-color-10] w-[100%]"
                placeholder="Nyaruwai"
                onChange={(e)=>setFormData({...formData,secondname:e.target.value})}
                type="text"
              ></input>
            </>
          )}
          <label className="text-[1.6rem]">Email:</label>
          <input
            className="p-[1rem] outline-none text-[1.6rem] rounded-[6px] border-none bg-[--primary-color-10] w-[100%]"
            placeholder="annu@gmail.com"
            onChange={(e)=>setFormData({...formData,email:e.target.value})}
            type="email"
          ></input>
          <label className="text-[1.6rem]">Password:</label>
          <div className="relative flex items-center w-[100%]">
            <input
              className="p-[1rem] outline-none text-[1.6rem] rounded-[6px] border-none bg-[--primary-color-10] w-[100%]"
              placeholder="Enter password here..."
              onChange={(e)=>setFormData({...formData,password:e.target.value})}
              type={`${showPassword ? "text" : "password"}`}
            ></input>
            {showPassword ? (
              <BsEye
                className="absolute right-[5%] w-[20px] h-[20px] cursor-pointer opacity-90"
                onClick={() => setShowPassword(false)}
              />
            ) : (
              <BsEyeSlash
                className="absolute right-[5%] w-[20px] h-[20px] cursor-pointer opacity-90"
                onClick={() => setShowPassword(true)}
              />
            )}
          </div>

          {sighnUp && (
            <>
              <label className="text-[1.6rem]">Confirm Password:</label>
              <div className="relative flex items-center w-[100%]">
                <input
                  className="p-[1rem] outline-none text-[1.6rem] rounded-[6px] border-none bg-[--primary-color-10] w-[100%]"
                  placeholder="Confirm your password..."
                  type={`${showConfirmPassword ? "text" : "password"}`}
                  onChange={(e)=>setFormData({...formData,confirmPassword:e.target.value})}
                ></input>
                {showConfirmPassword ? (
                  <BsEye
                    className="absolute right-[5%] w-[20px] h-[20px] cursor-pointer opacity-90"
                    onClick={() => setShowConfirmPassword(false)}
                  />
                ) : (
                  <BsEyeSlash
                    className="absolute right-[5%] w-[20px] h-[20px] cursor-pointer opacity-90"
                    onClick={() => setShowConfirmPassword(true)}
                  />
                )}
              </div>
            </>
          )}
        <div className="flex justify-center w-[100%]">
          <button type="submit" className="w-[100%] mt-[2rem] border-none rounded-[4px] py-[10px] px-[2px] text-[--primary-color-500] text-[1.8rem] font-[500] bg-[--color-300]">
            {sighnUp ? "SIGN UP" : "LOG IN"}
          </button>
        </div>
        </form>
        <div className="flex justify-center gap-[1rem] mt-[1rem] text-[1.4rem]">
          <p>
            {sighnUp ? "Already have an account?" : "Don't have an account?"}
          </p>
          <p
            className="cursor-pointer underline"
            onClick={() => setSighnUp((prev) => !prev)}
          >
            {sighnUp ? "Log in" : "Sign up"}
          </p>
        </div>
      </div>
    </div>
  );
}
