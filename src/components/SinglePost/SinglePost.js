import React from 'react'
import './SinglePost.css'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
export default function SinglePost() {
  return (
    <div className='SinglePost'>
        <div className='SinglePostWrapper'>
            <img src={require('../posts/cardimg.jpg')} className='SinglePostImg'/>
            <div className='upper'>
            <h1 className='SinglePost-title'> Future of Software Engineers </h1>
            <span>            <EditIcon className='SinglePosticon' sx={{fontSize:'2.5rem'}} />
            <DeleteIcon className='SinglePosticon' sx={{fontSize:'2.5rem'}}/>
            </span>
            </div>
            <div className='SinglePostInfo'>
                <span className='SinglePostAuthor'>Author:  <b>Safak</b></span>
                <span className='SinglePostDate'>1 hour ago</span>

            </div>
            <p className='SinglePostDesc'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.

            </p>
        </div>

    </div>
  )
}
