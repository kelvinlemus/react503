import React from 'react';
import './main.scss';

import Header from './components/Header';
import Search from './components/Search';

function App() {
  return (
    <div className="container">
      <Header />
      <Search />
    </div>
  );
}

export default App;
