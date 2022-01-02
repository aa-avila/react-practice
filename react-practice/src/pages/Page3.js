import FavFoods from '../components/food/FavFoods';
import FoodList from '../components/food/FoodList';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

function Page3() {
  return (
    <>
      <Typography variant="h6" component="h6" sx={{ p: 2 }}>
        Esta es la Pagina 3
      </Typography>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around'
        }}
      >
        <FavFoods />
        <FoodList />
      </Container>
    </>
  );
}

export default Page3;
