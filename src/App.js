import React from 'react';
import CardList from './components/CardList/CardList';

import classes from './App.module.scss';

function App() {
  return (
    <div className={classes.App}>
      <header className={classes.Header}>
        <h1 className={classes.SiteTitle}>React Demo: Art Selection</h1>
      </header>

      <CardList />
    </div>
  );
}

export default App;
