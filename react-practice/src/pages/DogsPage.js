import { useState } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import ErrorIcon from '@mui/icons-material/Error';

import axios from 'axios';

function DogsPage() {
  // useState -> isLoaded, isLoading -> render condicional
  // componentes: DogImage (recibe imgUrl); Spinner (cosito loading); NoImage (sin imagen aun)

  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadErr, setIsLoadErr] = useState(false);

  let dogUrl = '';

  const getRandomDog = async () => {
    try {
      setIsLoading(true);
      setIsLoaded(false);
      const dog = await axios.get('https://dog.ceo/api/breeds/image/random');
      dogUrl = dog.data.message;
      console.log(dogUrl);
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

  const imageComponent = () => {
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
      return (
        <Box>
          <img
            //TODO: ingresar dogUrl dinamicamente
            src="https://images.dog.ceo/breeds/tervuren/shadow_and_frisbee.jpg"
            alt="imagen de perro aleatoria"
          ></img>
        </Box>
      );
    }
  };

  return (
    <>
      <Typography variant="h6" component="h6" sx={{ p: 2 }}>
        Dogs
      </Typography>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around'
        }}
      >
        <Button variant="contained" size="medium" onClick={getRandomDog}>
          Random Dog
        </Button>

        {imageComponent()}
      </Container>
    </>
  );
}

export default DogsPage;
