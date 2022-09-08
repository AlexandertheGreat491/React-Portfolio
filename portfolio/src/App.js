import React from 'react';
//import logo from './logo.svg';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import './App.css';

function App() {
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <main>
        <About></About>
        <Portfolio></Portfolio>
      </main>
    </div>
  );
}

export default App;
