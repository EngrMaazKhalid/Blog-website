import React from 'react'
import SideBar from '../../components/SideBar/SideBar'
import './setting.css'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import PortraitRoundedIcon from '@mui/icons-material/PortraitRounded';
export default function Setting() {
  return (
    <div className='setting'>
        <div className='settingwrapper'>
           <div className='settingTitle'>
            <span className='settingUpdateTitle'>Update your Account</span>
            <span className='settingDeleteTitle'>Delete Account</span>
           </div>
           <form className='settingForm'>
            <label>Profile Picture</label>
            <div className='settingPP'>
                <img src={require('./images.jpg')} />
                <label htmlFor='fileInput'>
                <AccountCircleRoundedIcon sx={{ color:'white',borderRadius:'50%',cursor:'pointer', backgroundColor:'red', fontSize:'2.5rem'}}/>
                </label>
                <input type='file' id='fileInput' style={{display: 'none'}} /> 
            </div>
            <label>User Name</label>
            <input type='text' placeholder='Write your name here' />
            <label>Email</label>
            <input type='email' placeholder='abcde@email.com' />
            <label>Password</label>
            <input type='password'  />
            <button className='settingButton'>Update</button>
           </form>
        </div>
        <SideBar />
        </div>
  )
}
