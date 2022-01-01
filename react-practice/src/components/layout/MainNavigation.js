import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.appName}>My super app</div>
      <nav>
        <ul>
          <li>
            <Link to="/react-practice">Home</Link>
          </li>
          <li>
            <Link to="/react-practice/page1">Pagina 1</Link>
          </li>
          <li>
            <Link to="/react-practice/page2">Pagina 2</Link>
          </li>
          <li>
            <Link to="/react-practice/page3">Pagina 3</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
