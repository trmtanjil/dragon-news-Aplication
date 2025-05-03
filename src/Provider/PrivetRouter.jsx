import React, { use } from 'react'
import { authContext } from './AuthProvider'
import { Navigate, useLocation } from 'react-router';

function PrivetRouter({children}) {
    const {user ,loading}= use(authContext);
    const location = useLocation()
    console.log(location)
    console.log(user)

    if(loading){
        return<>
        <span className="loading loading-infinity loading-xs"></span>
<span className="loading loading-infinity loading-sm"></span>
<span className="loading loading-infinity loading-md"></span>
<span className="loading loading-infinity loading-lg"></span>
<span className="loading loading-infinity loading-xl"></span>
        </>
    }
    if(user && user?.email){
        return children;
    }
    return <Navigate state={location.pathname} to='/auth/login'></Navigate>
 
}

export default PrivetRouter