import { useRef } from 'react';

function UserForm() {
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

    console.log(userData);
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
          <button>OK</button>
        </div>
      </form>
    </div>
  );
}

export default UserForm;
