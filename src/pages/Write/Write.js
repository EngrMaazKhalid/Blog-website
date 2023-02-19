import React from 'react'
import './Write.css'
import AddIcon from '@mui/icons-material/Add';

export default function Write() {
  return (
    <div className='write'>
      <img src={require('./cardimg.jpg')} className='writeimg'></img>
      <form className='Write-form'>
        <div className='writeformgroup'>
          <label htmlFor='fileInput'><AddIcon sx={{ fontSize: '2.3rem', borderRadius: '50%', border:'1px solid', cursor:'pointer', color:'grey', fontWeight:'500'}} /></label>
          <input type='file' id='fileInput' style={{display: 'none'}} />
          <input type='text' placeholder='Title' className='writeinput' autoFocus={true} />

        </div>
        <div className='writeformgroup'>
        <textarea className='writeinput text' placeholder='write your blog here...' typeof='text'></textarea>
        </div>
        <button className='writesubmit' type='submit'>Publish</button>
      </form>
    </div>
  )
}
