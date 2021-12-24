import './App.css';
import Container from '@mui/material/Container';
import { Route, Switch } from 'react-router-dom';

import MainNavigation from './components/layout/MainNavigation';
import HomePage from './pages/HomePage';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';

function App() {
  return (
    <Container className="App">
      <MainNavigation />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/page1">
          <Page1 />
        </Route>
        <Route path="/page2">
          <Page2 />
        </Route>
        <Route path="/page3">
          <Page3 />
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
