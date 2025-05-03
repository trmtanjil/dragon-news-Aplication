import React, { use, useState } from 'react'
import { Link } from 'react-router'
import { authContext } from '../Provider/AuthProvider';

function Register() {
  const {creatUser,setUser} =use(authContext)
  const [nameError, setNameError] = useState('')
  const handleRegister=e=>{
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const photourl = form.photourl.value;
    const email= form.email.value;
    const password = form.password.value;

   if(name.length<5){
    setNameError('plese set name cerecter uper 5 cerecters')
    return;
   }else{
    setNameError('')
   }

    creatUser(email,password)
    .then(result=>{
      console.log(result)
      setUser(result)
    })
    .catch(error=>{
      console.log(error)
    })
  }

  return (
         
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto my-12">
    <div className="card-body">
    <h1 className="text-2xl font-bold text-center py-5">Register Your Account!</h1>
    <div className='border w-3/4 mx-auto text-base-300'></div>

    {/* name  */}
      <form onSubmit={handleRegister} className="fieldset">
      <label className="label">Your Name</label>
      <input type="text" className="input" placeholder="Enter your name" name='name' />
      {
          nameError &&  <p className='text-red-500'>{nameError}</p>
        }

      {/* Photo url  */}
      <label className="label">Photo URL</label>
      <input type="text" className="input" placeholder="Enter your Photo url" name='photourl' />
        {/* Email  */}
        <label className="label">Email</label>
        <input type="email" className="input" placeholder="Email" name='email' />
        {/* password  */}
        <label className="label">Password</label>
        <input type="password" className="input" placeholder="Password" name='password' />
        <div><a className="link link-hover">Forgot password?</a></div>
      
        <button type='submit' className="btn btn-neutral mt-4"><Link to='/'>Register</Link></button>
      </form>
      <h2 className='text-center'> Already have an Account ?<Link className='text-blue-400 font-semibold' to='/auth/login'>Login</Link></h2>
    </div>
  </div>
  )
}

export default Register