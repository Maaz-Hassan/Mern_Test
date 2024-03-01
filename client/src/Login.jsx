import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';


function Login() {
  const navigate = useNavigate();
  const [user, setuser] = useState({});
  axios.defaults.withCredentials = true;


  const handleChange = (e) => {
    setuser({
      ...user,
        [e.target.name]: e.target.value
      })
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    
    axios.post('https://mern-test-psi.vercel.app/login', user)
    .then(result => {
      if(result.data == "Login Successfully"){
        alert(result.data)
        navigate('/home')
      }
      else{
        alert(result.data)
      }
    })
    .catch(err => console.log(err))
  }


  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
      <div className='bg-white p-3 rounded w-25'> 
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
          <input 
          type="email" 
          placeholder='Enter Email'
          autoComplete='off'
          name='email'
          className='form-control rounded-0'
          onChange={handleChange}
          />
          </div>
          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
          <input 
          type="password" 
          placeholder='Enter Password'
          autoComplete='off'
          name='password'
          className='form-control rounded-0'
          onChange={handleChange}

          />
          </div>
          <button type='submit' className='btn btn-success w-100 rounded-0'>Login</button>
          <p>Don't have an account?</p>
          <Link to={"/"} className='btn btn-default border w-100 bg-light rounded-0 text-decoration none'>Register</Link>
        </form>
      </div>
    </div>
  )
}

export default Login