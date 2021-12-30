import { createContext, useState } from 'react';

const UserContext = createContext({
  name: '',
  lastname: '',
  saveUser: (name, lastname) => {}
});

export function UserContextProvider(props) {
  const [user, setUser] = useState({});

  function saveUserHandler(userData) {
    setUser({ name: userData.name, lastname: userData.lastname });
  }

  const context = {
    name: user.name,
    lastname: user.lastname,
    saveUser: saveUserHandler
  };

  return (
    <UserContext.Provider value={context}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContext;
