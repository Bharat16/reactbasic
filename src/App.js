import React from 'react';
import './App.css';
import Navigation from './components/Navbar';
import Routes from './Routes';

function App() {
  return (
    <div className="App">
      <Navigation />
      <p>Go nowhere</p>
      <Routes />
    </div>
  );
}

export default App;
