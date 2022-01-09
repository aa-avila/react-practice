import { Container, Typography } from '@mui/material';

import ToggleBox from '../components/toggleBox/ToggleBox';

function Page1() {
  return (
    <>
      <Typography variant="h6" component="h6" sx={{ p: 2 }}>
        Esta es la Pagina 1.
      </Typography>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around'
        }}
      >
        <ToggleBox boxId="box1" title="ToggleBox 1" />
        <ToggleBox boxId="box2" title="ToggleBox 2" />
        <ToggleBox boxId="box3" title="Otro texto 3" />
        <ToggleBox boxId="box4" title="lalala 4" />
      </Container>
      <br></br>
      <i>
        El estado de cada ToggleBox se guarda en el localStorage y es comprobado
        en el primer render de la página mediante useEffect. Como resultado,
        dichos estados no se pierden al cambiar de pagina o incluso al cerrar y
        abrir el navegador.
      </i>
    </>
  );
}

export default Page1;
