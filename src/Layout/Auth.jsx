import React from 'react'
import Navber from '../Componets/Navber'
import { Outlet } from 'react-router'

function Auth() {
  return (
   <>
    <div className='bg-base-200 h-screen'>
    <header className='w-11/12 mx-auto'>
    <Navber></Navber>
   </header>
   <main>
    <Outlet></Outlet>
   </main>
    </div>
   </>
  )
}

export default Auth