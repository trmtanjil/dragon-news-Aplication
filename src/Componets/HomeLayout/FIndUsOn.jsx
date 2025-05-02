import React from 'react'
import { FaInstagramSquare, FaTwitter } from 'react-icons/fa';
import { TiSocialFacebook } from "react-icons/ti";



function FIndUsOn() {
  return (
    <>
    <h1 className='font-bold py-5'>Find Us on </h1>
    <div className="join join-vertical    w-full">
  <button className="btn join-item bg-base-100 justify-start"> <span className='text-blue-500 bg-base-200 rounded-[50%]'><TiSocialFacebook size={24} />
  </span>
  Facebook</button>
  <button className="btn join-item bg-base-100 justify-start"> <span className='text-blue-400 bg-base-200 rounded-[50%]'><FaTwitter size={24} />
  </span>Twitter</button>
  <button className="btn join-item bg-base-100 justify-start"> <span className='text-red-500 bg-base-200 rounded-[50%]'><FaInstagramSquare size={24} />
  </span> Instagram</button>
</div>
    </>
  )
}

export default FIndUsOn