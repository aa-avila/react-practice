import { Container, Typography } from '@mui/material';
import UserForm from '../components/userForm/UserForm';
import UserFullName from '../components/userData/UserFullName';

function HomePage() {
  return (
    <>
      <Typography variant="h6" component="h6" sx={{ p: 2 }}>
        Esta es la Home Page.
      </Typography>
      <Container>
        <p>Ingrese su nombre y apellido:</p>
        <UserForm />
        <UserFullName />
      </Container>
    </>
  );
}

export default HomePage;
