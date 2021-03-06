import { useContext, useState, useEffect } from 'react';
import FoodContext from '../../store/food-context';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

function FavFoods() {
  const foodCtx = useContext(FoodContext);

  const [food1, setFood1] = useState('');
  const [food2, setFood2] = useState('');
  const [food3, setFood3] = useState('');

  // Setea los valores previamente ingresados (evita que se "borre" al cambiar de pagina)
  // se ejecuta solo al cargar la pagina
  useEffect(() => {
    setFood1(foodCtx.food1);
    setFood2(foodCtx.food2);
    setFood3(foodCtx.food3);
  }, []);

  // Actualiza los datos del context con cada cambio de cada input
  useEffect(() => {
    const foodsData = {
      food1: food1,
      food2: food2,
      food3: food3
    };
    foodCtx.saveFoods(foodsData);
  }, [food1, food2, food3]);

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
      <Typography variant="h6" component="div" sx={{ mb: 1 }}>
        Mis comidas favoritas:
      </Typography>

      <TextField
        id="food1-input"
        label="Comida 1"
        size="small"
        sx={{ my: 1 }}
        value={food1}
        onChange={(e) => setFood1(e.target.value)}
      />
      <TextField
        id="food2-input"
        label="Comida 2"
        size="small"
        sx={{ my: 1 }}
        value={food2}
        onChange={(e) => setFood2(e.target.value)}
      />
      <TextField
        id="food3-input"
        label="Comida 3"
        size="small"
        sx={{ my: 1 }}
        value={food3}
        onChange={(e) => setFood3(e.target.value)}
      />
      <br></br>
      <br></br>
      <div>
        <i>Controlled Inputs, useContext, useEffect</i>
      </div>
    </Box>
  );
}

export default FavFoods;
