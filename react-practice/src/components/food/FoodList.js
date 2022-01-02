import validate from 'validate.js';
import { useContext } from 'react';
import FoodContext from '../../store/food-context';

import { Box, Typography } from '@mui/material';

function FoodList() {
  const foodCtx = useContext(FoodContext);

  const { food1, food2, food3 } = foodCtx;

  const FoodText = () => {
    const foodItems = [food1, food2, food3];
    let validatedFoodItems = [];

    foodItems.forEach((element) => {
      if (!validate.isEmpty(element)) {
        validatedFoodItems.push(element);
      }
    });

    let htmlText;

    //no items
    if (validatedFoodItems.length === 0) {
      htmlText = `No tengo ninguna comida favorita porque soy un amargo. Bye!`;
    }

    //1 item
    if (validatedFoodItems.length === 1) {
      htmlText = `La única comida que me gusta es ${validatedFoodItems[0]}.`;
    }
    //2 items
    if (validatedFoodItems.length === 2) {
      htmlText = `La comida que más me gusta es ${validatedFoodItems[0]}. Despúes le
          sigue ${validatedFoodItems[1]}.`;
    }

    //3 items
    if (validatedFoodItems.length === 3) {
      htmlText = `La comida que más me gusta es ${validatedFoodItems[0]}. Despúes le
          sigue ${validatedFoodItems[1]}. Y por por último, en el tercer lugar se encuentra ${validatedFoodItems[2]}.`;
    }

    return (
      <Typography variant="body1" component="div" sx={{ mb: 1 }}>
        {htmlText}
      </Typography>
    );
  };

  return (
    <Box
      sx={{
        p: 2,
        width: '45%',
        boxShadow: 2,
        bgcolor: '#fff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
    >
      <FoodText />
      <br></br>
      <br></br>
      <div>
        <i>validator.js, useContext</i>
      </div>
    </Box>
  );
}

export default FoodList;
