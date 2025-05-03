import React, { createContext, useEffect, useState } from 'react'
import app from '../firebase/Firbase.config';
export  const authContext = createContext()
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
const auth = getAuth(app);


function AuthProvider({children}) {
    const [user,setUser] = useState(null);
    const [loading, setLoading] =useState(true)

    const creatUser = (email,  password)=>{
      setLoading(true)

      return createUserWithEmailAndPassword(auth,email,password)
    }

    const logOut = ()=>{
      setLoading(true)

      return signOut(auth)
    }
    const logIn = (eamil,password)=>{
      setLoading(true)
      return signInWithEmailAndPassword(auth, eamil, password)
    }

    // useEffect
    useEffect(()=>{
      const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser)
        setLoading(false)
      })
      return ()=>{
        unSubscribe();
      }
    },[])


    const authData ={
        user,
        setUser,
        creatUser,
        logOut,
        logIn,
        loading,
        setLoading,
    }

  return  <authContext.Provider value={authData} >
    {children}
  </authContext.Provider>
}

export default AuthProvider