import React from 'react'
import Header from '../../components/header/Header'
import Post from '../../components/posts/Post'
import SideBar from '../../components/SideBar/SideBar'
import './Home.css'
export default function Home() {
  return (
    <div>
      <Header />
    <div className='home-content'>
      <Post />
    <SideBar />
    </div>
    </div>
  )
}
