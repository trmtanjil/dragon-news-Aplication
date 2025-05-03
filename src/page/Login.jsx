import React, { use, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router'
import { authContext } from '../Provider/AuthProvider'

function Login() {
  const {logIn} =use(authContext);
  const [error, setError] = useState('')
  const location = useLocation()
  const navigat = useNavigate()
  console.log(location)

const handleLogin =e=>{
  e.preventDefault();
  const form = e.target;
  const email = form.email.value;
  const password = form.password.value;
  
console.log(email,password)
 
    logIn(email,password)
    .then(result=>{
      const user = result.user;
      console.log(result,user)
      navigat(`${location.state ? location.state : '/'}`)
      
    })
    .catch(error=>{
      console.log(error)
      const errorCode = error.code;
      // const errorMessage = error.message;
      // alert(errorCode,errorMessage)
      setError(errorCode)
    })
}


 
  return (
     
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto my-12">
        <div className="card-body">
        <h1 className="text-2xl font-bold text-center">Login Your Account!</h1>
          <form onSubmit={handleLogin} className="fieldset">
            {/* email */}
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" name='email' />
            {/* password */}
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password"  name='password'/>
            <div><a className="link link-hover">Forgot password?</a></div>
            {
              error && <p className='text-red-500'>{error}</p>
            }
            <button   type='submit' className="btn btn-neutral mt-4">Login</button>
          </form>
          <h2 className='text-center'>Dont have an account ?<Link className='text-red-500 font-semibold' to='/auth/register'>Register</Link></h2>
        </div>
      </div>
    
  )
}

export default Login