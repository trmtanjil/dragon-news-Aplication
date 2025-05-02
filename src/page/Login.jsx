import React from 'react'
import { Link } from 'react-router'

function Login() {
  return (
     
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto my-12">
        <div className="card-body">
        <h1 className="text-2xl font-bold text-center">Login Your Account!</h1>
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <div><a className="link link-hover">Forgot password?</a></div>
            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
          <h2 className='text-center'>Dont have an account ?<Link className='text-red-500 font-semibold' to='/auth/register'>Register</Link></h2>
        </div>
      </div>
    
  )
}

export default Login