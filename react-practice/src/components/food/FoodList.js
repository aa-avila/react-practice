import { useContext } from 'react';
import FoodContext from '../../store/food-context';

import { Box, Typography } from '@mui/material';

function FoodList() {
  const foodCtx = useContext(FoodContext);

  const { food1, food2, food3 } = foodCtx;
  return (
    <Box sx={{ p: 2, width: '45%', boxShadow: 2, bgcolor: '#fff' }}>
      <Typography variant="body1" component="div" sx={{ mb: 1 }}>
        La comida que más me gusta es {food1}.
      </Typography>
      <Typography variant="body1" component="div" sx={{ mb: 1 }}>
        En segundo lugar le sigue {food2}.
      </Typography>
      <Typography variant="body1" component="div" sx={{ mb: 1 }}>
        Por último, en el tercer lugar se encuentra {food3}.
      </Typography>
    </Box>
  );
}

export default FoodList;
