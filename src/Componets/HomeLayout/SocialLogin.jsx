import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";


function SocialLogin() {
  return (
    <>
    <h2 className='font-bold '>Login With</h2>
    <button className='w-full text-center text-blue-500 btn  btnp my-2 btn-outline btn-success hover:text-white'><FcGoogle size={24} />Login with Foogle </button>
    <button className='w-full text-center 
    text-accent btn btn-outline   hover:text-black'><FaGithub size={24} />  Login with github </button>

     </>
  )
}

export default SocialLogin