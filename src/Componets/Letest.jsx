import React from 'react'
import Marquee from 'react-fast-marquee'

function Letest() {
  return (
    <div className='flex  items-center bg-base-200 p-3 gap-2'>
        <p className='py-2 px-4 bg-secondary  text-white'>Latest</p>
    <Marquee className='gap-5 ' speed={60} pauseOnHover={true}>
    <p className='font-bold'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda, sit nobis?</p>
    <p className='font-bold'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda, sit nobis?</p>
    <p className='font-bold'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda, sit nobis?</p>
    </Marquee>
    </div>
  )
}

export default Letest