import { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import axios from 'axios';

function DogsPage() {
  // useState -> isLoaded, isLoading -> render condicional
  // componentes: DogImage (recibe imgUrl); Spinner (cosito loading); NoImage (sin imagen aun)

  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const getRandomDog = async () => {
    try {
      setIsLoading(true);
      setIsLoaded(false);
      const dog = await axios.get('https://dog.ceo/api/breeds/image/random');
      console.log(dog);
      setIsLoaded(true);
      setIsLoading(false);
    } catch (error) {
      setIsLoaded(false);
      setIsLoading(false);
      console.log(error);
    }
  };

  const imageComponent = () => {
    if (!isLoaded && !isLoading) {
      return <p>sin imagen</p>;
    }
    if (!isLoaded && isLoading) {
      return <p>cargando...</p>;
    }
    if (isLoaded && !isLoading) {
      return <p>imagen cargada</p>;
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
