import { useRef } from 'react';
import { useContext } from 'react';
import UserContext from '../../store/user-context';

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
    <div>
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
      </form>
    </div>
  );
}

export default UserForm;
