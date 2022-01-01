import { Box, Typography } from '@mui/material';

function FoodList() {
  const food1 = 'pizza';
  return (
    <Box sx={{ p: 2, width: '45%', boxShadow: 2, bgcolor: '#fff' }}>
      <Typography variant="body1" component="div" sx={{ mb: 1 }}>
        La comida que más me gusta es {food1}.
      </Typography>
      <Typography variant="body1" component="div" sx={{ mb: 1 }}>
        En segundo lugar le sigue {food1}.
      </Typography>
      <Typography variant="body1" component="div" sx={{ mb: 1 }}>
        Por último, en el tercer lugar se encuentra {food1}.
      </Typography>
    </Box>
  );
}

export default FoodList;
