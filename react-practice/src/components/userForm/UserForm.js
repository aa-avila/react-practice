import { useRef } from 'react';
import { useContext } from 'react';
import UserContext from '../../store/user-context';
import { Box } from '@mui/material';

function UserForm() {
  const userCtx = useContext(UserContext);

  const nameInputRef = useRef();
  const lastnameInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredLastname = lastnameInputRef.current.value;

    const userData = {
      name: enteredName,
      lastname: enteredLastname
    };

    userCtx.saveUser(userData);
  }

  return (
    <Box sx={{ p: 2, width: '45%', boxShadow: 2, bgcolor: '#fff' }}>
      <h4>Ingrese su nombre y apellido:</h4>

      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="name">Nombre:</label>
          <input type="text" required id="name" ref={nameInputRef} />
        </div>
        <br></br>
        <div>
          <label htmlFor="lastname">Apellido:</label>
          <input type="text" required id="lastname" ref={lastnameInputRef} />
        </div>
        <br></br>
        <div>
          <button>Guardar</button>
        </div>
        <br></br>
        <i>
          Estos datos se guardan en el UserContext y estan disponibles en todos
          los componentes de la app.
        </i>
      </form>
    </Box>
  );
}

export default UserForm;
