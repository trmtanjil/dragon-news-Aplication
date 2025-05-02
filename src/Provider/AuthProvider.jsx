import React, { createContext, useState } from 'react'

export  const authContext = createContext()

function AuthProvider({children}) {
    const [user,setUser] = useState({
        name:'tanjil',
        email: 'trm@g.com',
    });
    const authData ={
        user,
        setUser,
    }

  return  <authContext.Provider value={authData} >
    {children}
  </authContext.Provider>
}

export default AuthProvider