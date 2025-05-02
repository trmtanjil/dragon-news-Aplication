import React from 'react'
import swimming from'../../assets/swimming.png';
import clas from '../../assets/class.png';
import paying from'../../assets/playground.png';
import bg from '../../assets/bg.png'

function QZone() {
  return (
    <>
    <div className='bg-base-200 p-2'>
        <h1 className='font-bold '>Qzone</h1>
        <div>
            <img src={swimming} alt="" />
            <img src={ clas} alt="" />
            <img src={paying} alt="" />

        </div>
    </div>
        <img src={bg} alt="" />
    </>
  )
}

export default QZone