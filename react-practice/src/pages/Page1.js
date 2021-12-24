import { Container, Typography } from '@mui/material';
import ButtonClickAlert from '../components/ButtonClickAlert';

function Page1() {
  return (
    <>
      <Typography variant="h5" component="h5" sx={{ p: 2 }}>
        Esta es la Pagina 1
      </Typography>
      <Container>
        <p>Este es un parrafo comun, un "p" de html.</p>
        <Typography variant="p" component="p">
          En cambio esto es un componente "Typography" de MUI. Variant "p" y
          component "p".
        </Typography>

        <h4>Esto es un h4 html</h4>
        <Typography variant="h4" component="h4">
          Y esto es un componente "Typography" de MUI. Variant "h4" y component
          "h4".
        </Typography>

        <br></br>

        <ButtonClickAlert text="Clickeame!" />
      </Container>
    </>
  );
}

export default Page1;
