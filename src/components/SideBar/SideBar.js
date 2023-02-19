import { requirePropFactory } from '@mui/material'
import React from 'react'
import './sidebar.css'
export default function SideBar() {
  return (
    <div className='sideBar'>
        <span className='sidebar-item'>
            <span className='sidebar-title'>About Us</span>
            <div className='sidebar-img'>
            {/* <img src={require('./aboutus.jpg')} /> */}
              
            </div>
            <p className='sidebar-para'>
                Lorem ibhfchufn jxchjkdhrbf ksiwsnaond nxcyuen jksh ib ixhnxud js kihchjbdgyud jxghudb naa zkbhauldh jdbhd jsd
            </p>

        </span>
        <span className='sidebar-item'>
        <span className='sidebar-title'>Categories</span>
            <ul className='sidebarul'>
                <li className='sidebarli'>Web Development</li>
                <li className='sidebarli'>App</li>
                <li className='sidebarli'>SEO</li>
                <li className='sidebarli'>Digital marketing</li>
                <li className='sidebarli'>Ecommerce</li>
                <li className='sidebarli'>Data Science</li>
            </ul>
        </span>
    </div>
  )
}
