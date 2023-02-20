import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { requirePropFactory } from '@mui/material';
import { Link } from 'react-router-dom';

export default function PostCard() {
  return (
    <Card sx={{ maxWidth: 385 , margin:'10px'}}>
      
      <CardMedia
        sx={{ height: 200 }}
        image={require("./cardimg.jpg")}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{fontSize:'2rem'}}>
          Future of Software Engineers
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{fontSize:'1.6rem'}}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small">Share</Button> */}
        <Button size="large" sx={{fontSize:'1.6rem'}}><Link to='/post/:postid' style={{ textDecoration: 'none', color: 'inherit' }}>Learn more</Link></Button>
      </CardActions>
    </Card>
  )
}
