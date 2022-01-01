import { Container, Typography } from '@mui/material';
import UserForm from '../components/userForm/UserForm';
import UserFullName from '../components/userData/UserFullName';

function Page2() {
  return (
    <>
      <Typography variant="h6" component="h6" sx={{ p: 2 }}>
        Esta es la Pagina 2.
      </Typography>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around'
        }}
      >
        <UserForm />
        <UserFullName />
      </Container>
    </>
  );
}

export default Page2;
