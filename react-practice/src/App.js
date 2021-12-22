import './App.css';
import Container from '@mui/material/Container';
import ButtonClickAlert from './components/ButtonClickAlert';
import Saludo from './components/Saludo';
import Image from './components/Image';

function App() {
  return (
    <div className="App">
      <Container maxWidth="md">
        <Saludo />
        <ButtonClickAlert text="Click me!" />
        <Image />
      </Container>
    </div>
  );
}

export default App;
