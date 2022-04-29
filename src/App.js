// import logo from './logo.svg';
import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import Home from './routes/Home';
import Detail from './routes/Detail';
import Write from './routes/Write';
import Navigation from './components/Navigation';

import './App.css';
//import AxiosTest from './AxiosTest';

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/detail" component={Detail} />
      <Route path="/write" component={Write} />
    </HashRouter>
    // <div className="App">
    //   <AxiosTest />
    // </div>
  );
}

export default App;