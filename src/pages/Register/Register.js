import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import './Register.css'
export default function Register() {
  return (
    <div className='Login'>
        <span className='Logintitle'>Register</span>
        <form className='LoginForm'>
            <label>User Name</label>
            <input type='name' className='LoginInput' placeholder='Enter username' />
            
            <label>Email</label>
            <input type='email' className='LoginInput' placeholder='Enter your email here....' />
            
            <label>Password</label>
            <input type='password' className='LoginInput' placeholder='Enter your password here....' />
            <button className='buttonlogin'>Register</button>
        </form>
            <button className='buttonRegister'><Link to='/login' style={{ textDecoration: 'none', color: 'inherit' }}>Login</Link></button>
    </div>
  )
}
