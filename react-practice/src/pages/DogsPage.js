import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import RandomDog from '../components/dogs/RandomDog';

function DogsPage() {
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
        <RandomDog />
        <RandomDog />
        <RandomDog />
        <RandomDog />
      </Container>
    </>
  );
}

export default DogsPage;
