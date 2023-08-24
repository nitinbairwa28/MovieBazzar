import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { MovieData } from '../constants/moviedata/moviedata';
import { Grid } from '@mui/material';
import { Movie } from '@mui/icons-material';
import { Link } from 'react-router-dom';

export default function ImgMediaCard() {
  return (  
    <>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://images-na.ssl-images-amazon.com/images/S/pv-target-images/0aaec7609f000b540da6a8ef6c1e91519cfc34bac84a43bdc3369e1baeeeef8e._UY500_UX667_RI_TTW_.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Sultan : 2016
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>

        <Grid container spacing={2}>
          { MovieData&&
          MovieData.map((Movie,index) => (
            <Grid item xs={12} smm={6} md={4} key={index}>
              <Link to={`/movie/${movie.id}`}>
                <Card>
                  <CardMedia
                   component="img"
                   height="300"
                   image={movie.image}
                   alt={movie.title}/>
               <CardContent></CardContent>
                </Card>
              </Link>
          ))))}
        </Grid>


      </CardContent>
      
    </Card>
    </>
  );
}