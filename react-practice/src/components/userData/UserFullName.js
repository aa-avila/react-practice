import { useContext } from 'react';
import UserContext from '../../store/user-context';

function UserFullName() {
  const userCtx = useContext(UserContext);
  return (
    <div>
      <p>Nombre y apellido guardados:</p>
      <p>{userCtx.name}</p>
      <p>{userCtx.lastname}</p>
    </div>
  );
}

export default UserFullName;
