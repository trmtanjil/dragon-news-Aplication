import React from 'react'
import SocialLogin from './SocialLogin'
import FIndUsOn from './FIndUsOn'
import QZone from './QZone'

function RightAside() {
  return (
 <div className='space-y-3'>
   <SocialLogin></SocialLogin>
   <FIndUsOn></FIndUsOn>
   <QZone></QZone>
 </div>
  
  )
}

export default RightAside