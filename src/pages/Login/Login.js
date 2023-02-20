import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
export default function Login() {
  return (
    <div className='Login'>
        <span className='Logintitle'>Login</span>
        <form className='LoginForm'>
            <label>Email</label>
            <input type='email' className='LoginInput' placeholder='Enter your email here....' />
            
            <label>Password</label>
            <input type='password' className='LoginInput' placeholder='Enter your password here....' />
            <button className='buttonlogin'>Login</button>
        </form>
            <button className='buttonRegister'><Link to='/register' style={{ textDecoration: 'none', color: 'inherit' }}>Register</Link></button>
    </div>
  )
}
