import React from 'react'
import { NavLink } from 'react-router'
import user from '../assets/user.png'

function Navber() {
  return (
     <>
     <div className='flex justify-between my-3 text-accent items-center'>
        <div className=''></div>
        <div className='nav  flex gap-5'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/career'>career</NavLink>

        </div>
        <div className='flex justify-center gap-5'>
            <img src={user} alt="" />
            <button className='userbtn bg-primary text-white py-2 px-5 rounded-sm'>Login</button>
        </div>
     </div>
     </>
  )
}

export default Navber