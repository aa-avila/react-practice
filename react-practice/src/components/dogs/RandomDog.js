import { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import HideImageIcon from '@mui/icons-material/HideImage';
import CircularProgress from '@mui/material/CircularProgress';
import ErrorIcon from '@mui/icons-material/Error';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';

import axios from 'axios';

function RandomDog() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadErr, setIsLoadErr] = useState(false);
  const [dogUrl, setDogUrl] = useState('');

  const getRandomDog = async () => {
    try {
      setIsLoading(true);
      setIsLoaded(false);

      const dog = await axios.get('https://dog.ceo/api/breeds/image/random');
      setDogUrl(dog.data.message);

      setIsLoaded(true);
      setIsLoading(false);
      setIsLoadErr(false);
    } catch (error) {
      setIsLoaded(false);
      setIsLoading(false);
      setIsLoadErr(true);
      console.log(error);
    }
  };

  const image = () => {
    if (!isLoaded && !isLoading) {
      if (isLoadErr) {
        return <ErrorIcon sx={{ fontSize: '3rem' }} />;
      } else {
        return (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              height: 150
            }}
          >
            <HideImageIcon />
          </Box>
        );
      }
    }
    if (!isLoaded && isLoading) {
      return (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            height: 150
          }}
        >
          <CircularProgress />
        </Box>
      );
    }
    if (isLoaded && !isLoading) {
      return (
        <CardMedia
          component="img"
          alt="green iguana"
          height="150"
          image={dogUrl}
        />
      );
    }
  };

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '20%'
      }}
    >
      {image()}

      <CardActions
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 2
        }}
      >
        <Button variant="contained" size="small" onClick={getRandomDog}>
          Random Dog
        </Button>
      </CardActions>
    </Card>
  );
}

export default RandomDog;
