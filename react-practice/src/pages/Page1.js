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
        <ToggleBox title="ToggleBox 1" />
        <ToggleBox title="ToggleBox 2" />
        <ToggleBox title="Otro texto 3" />
        <ToggleBox title="lalala 4" />
      </Container>
    </>
  );
}

export default Page1;
