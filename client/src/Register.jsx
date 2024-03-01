import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, useNavigate } from 'react-router-dom'

function Register() {
    const [register , setRegister] = useState({})
    const navigate = useNavigate();

const handleChange = (e) => {
  setRegister({
    ...register,
    [e.target.name]: e.target.value
  })
}

const handleSubmit = (e) => {
  e.preventDefault()
  axios.post('https://mern-test-psi.vercel.app/register', register)
  .then(result => {
    if(result.data == "User already Registered"){
      alert(result.data)
    }
    else{
      alert(result.data)
      navigate("/Login")
    }
})
  .catch(err => console.log(err))
}
  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
      <div className='bg-white p-3 rounded w-25'> 
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name">
              <strong>Name</strong>
            </label>
          <input 
          type="text" 
          placeholder='Enter Name'
          autoComplete='off'
          name='name'
          className='form-control rounded-0'
          onChange={handleChange}
          />
          </div>
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
          <button type='submit' className='btn btn-success w-100 rounded-0'>Register</button>
          <p>Already have an account?</p>
          <Link to={"/Login"} className='btn btn-default border w-100 bg-light rounded-0 text-decoration none'>Login</Link>
        </form>
      </div>
    </div>
  )
}

export default Register