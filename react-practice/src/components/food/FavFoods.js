import { Box, TextField, Typography } from '@mui/material';

function FavFoods() {
  return (
    <Box sx={{ p: 2, width: '45%', boxShadow: 2, bgcolor: '#fff' }}>
      <Typography variant="h6" component="div" sx={{ mb: 1 }}>
        Mis comidas favoritas:
      </Typography>

      <TextField
        id="food1-input"
        label="Comida 1"
        size="small"
        sx={{ my: 1 }}
      />
      <TextField
        id="food2-input"
        label="Comida 2"
        size="small"
        sx={{ my: 1 }}
      />
      <TextField
        id="food3-input"
        label="Comida 3"
        size="small"
        sx={{ my: 1 }}
      />
    </Box>
  );
}

export default FavFoods;
