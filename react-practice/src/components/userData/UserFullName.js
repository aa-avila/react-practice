import { useContext } from 'react';
import UserContext from '../../store/user-context';
import { Box } from '@mui/material';
function UserFullName() {
  const userCtx = useContext(UserContext);
  return (
    <Box sx={{ p: 2, width: '45%', boxShadow: 2, bgcolor: '#fff' }}>
      <h4>Datos de usuario guardados:</h4>
      <p>Nombre: {userCtx.name}</p>
      <p>Apellido: {userCtx.lastname}</p>
      <br></br>
      <i>
        Cuando el UserContext se actualiza, los nuevos valores se ven reflejados
        en este componente.
      </i>
    </Box>
  );
}

export default UserFullName;
