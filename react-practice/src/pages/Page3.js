import { Container, Typography } from '@mui/material';
import FavFoods from '../components/food/FavFoods';
import FoodList from '../components/food/FoodList';

import { FoodContextProvider } from '../store/food-context';

function Page3() {
  return (
    <>
      <FoodContextProvider>
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
      </FoodContextProvider>
    </>
  );
}

export default Page3;
