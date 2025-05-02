import React from 'react'
import { Link } from 'react-router'

function Register() {
  return (
         
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto my-12">
    <div className="card-body">
    <h1 className="text-2xl font-bold text-center py-5">Register Your Account!</h1>
    <div className='border w-3/4 mx-auto text-base-300'></div>

    {/* name  */}
      <fieldset className="fieldset">
      <label className="label">Your Name</label>
      <input type="text" className="input" placeholder="Enter your name" />
      {/* Photo url  */}
      <label className="label">Photo URL</label>
      <input type="text" className="input" placeholder="Enter your Photo url" />
        {/* Email  */}
        <label className="label">Email</label>
        <input type="email" className="input" placeholder="Email" />
        {/* password  */}
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

export default Register