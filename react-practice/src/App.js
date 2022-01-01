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
    <Container className="App" maxWidth="md">
      <MainNavigation />
      <Switch>
        <Route path="/react-practice" exact>
          <HomePage />
        </Route>
        <Route path="/react-practice/page1">
          <Page1 />
        </Route>
        <Route path="/react-practice/page2">
          <Page2 />
        </Route>
        <Route path="/react-practice/page3">
          <Page3 />
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
