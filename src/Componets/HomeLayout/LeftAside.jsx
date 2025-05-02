import React, { Suspense } from 'react'
import Categorys from '../Categorys'

function LeftAside() {
  return (
    <div>   
       <Suspense fallback={<><span className="loading loading-infinity loading-lg"></span>
        <span className="loading loading-infinity loading-xl"></span></>}>
       <Categorys></Categorys>
       </Suspense>
    </div>
  )
}

export default LeftAside