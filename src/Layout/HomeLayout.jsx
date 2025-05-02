import React from 'react'
import { Outlet } from 'react-router'
import Header from '../Componets/Header'
import Letest from '../Componets/Letest'
import Navber from '../Componets/Navber'
import LeftAside from '../Componets/HomeLayout/LeftAside'
import RightAside from '../Componets/HomeLayout/RightAside'

function HomeLayout() {
  return (
   <>
   <header>
    <Header></Header>
    <section className='w-11/12 mx-auto my-1'>
        <Letest></Letest>
    </section>
    <nav className='w-11/12 mx-auto my-1  '>
        <Navber></Navber>
    </nav>
   </header>
   
 <main className='w-11/12 mx-auto my-3 grid grid-cols-12 gap-4   '>
 <aside className='col-span-3 h-fit sticky top-0'>
    <LeftAside></LeftAside>
   </aside>
   <section className="main col-span-6">
    <Outlet>

    </Outlet>
   </section>
   <aside className='col-span-3 h-fit sticky top-0'>
     <RightAside></RightAside>
   </aside>
 </main>
   </>
  )
}

export default HomeLayout