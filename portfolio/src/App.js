import React from 'react';
//import logo from './logo.svg';
// imports the Header component
import Header from './components/Header';
// imports the About component
import About from './components/About';
// imports the Portfolio component
import Portfolio from './components/Portfolio';
// imports the Contact component
import Contact from './components/Contact';
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
        <Contact></Contact>
      </main>
    </div>
  );
}

export default App;
