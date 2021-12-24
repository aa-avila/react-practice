import { Container, Typography } from '@mui/material';

function HomePage() {
  return (
    <>
      <Typography variant="h6" component="h6" sx={{ p: 2 }}>
        Esta es la Home Page. Por ahora no hay nada aqui.
      </Typography>
      <Container>
        <p>Contenido blablebli.</p>
      </Container>
    </>
  );
}

export default HomePage;
