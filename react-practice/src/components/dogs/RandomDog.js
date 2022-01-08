import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import ErrorIcon from '@mui/icons-material/Error';

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
        return <p>Sin imagen</p>;
      }
    }
    if (!isLoaded && isLoading) {
      return <CircularProgress />;
    }
    if (isLoaded && !isLoading) {
      return <img src={dogUrl} alt="imagen de perro aleatoria" />;
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '20%'
      }}
    >
      <Button variant="contained" size="medium" onClick={getRandomDog}>
        Random Dog
      </Button>

      {image(dogUrl)}
    </Box>
  );
}

export default RandomDog;
