import React, { use } from 'react'
import { Link, NavLink } from 'react-router'
import usericon from '../assets/user.png'
import { authContext } from '../Provider/AuthProvider'

function Navber() {
  const {user,logOut} =use(authContext)


  const handleLogout =()=>{
    logOut()
    .then(()=>{
      alert ('you loged out succecfull ')
    })
    .catch((error) => {
      // An error happened.
      console.log(error)
    });
  }
  return (
     <>
     <div className='flex justify-between py-3 text-accent items-center'>
        <div className=''>{user && user.email}</div>
        <div className='nav  flex gap-5'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/career'>career</NavLink>

        </div>
        <div className='flex justify-center gap-5'>
            <img src={usericon} alt="" />
        
              {
                user ? <button onClick={handleLogout} className='userbtn bg-primary text-white py-2 px-5 rounded-sm'> LogOut</button> :   <button className='userbtn bg-primary text-white py-2 px-5 rounded-sm'> <Link to='/auth/login'>Login</Link></button>
              }
        </div>
     </div>
     </>
  )
}

export default Navber