import React from 'react'
import SideBar from '../../components/SideBar/SideBar'
import SinglePost from '../../components/SinglePost/SinglePost'
import './Single.css'
export default function Single() {
  return (
    <div className='Single'>
        <SinglePost />
        <SideBar />
    </div>
  )
}
