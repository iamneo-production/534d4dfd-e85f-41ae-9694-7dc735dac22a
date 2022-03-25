import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import { CardActionArea } from '@mui/material';
const Main = ({items}) => {
  

  return (
    <div class="cards">
       <Card sx={{ maxWidth: 340 , borderRadius: 10}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          image={items.imageUrl}
          alt="Birthday"
          display="flex"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {items.title}
          </Typography>
         <div class="rating">
         <p>place coimbatore</p>
         <Rating name="half-rating" defaultValue={3} precision={0.5} style={{marginLeft:"1rem"}} />
         </div>        
        </CardContent>
      </CardActionArea>
    </Card>

    </div>
  )
}

export default Main