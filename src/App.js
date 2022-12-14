import React, { useState } from 'react';
import Header from "./components/Header"
import Project from "./components/Project"
import Footer from "./components/Footer"
import About from "./components/About"
import Contact from "./components/Contact"
import Resume from "./components/Resume"
import Nav from "./components/Nav"
import './App.css';


function App() {
  const [categories] = useState([
    { name: "About Me" },
    { name: "Portfolio" },
    { name: "Contact" },
    { name: "Resume" }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div id="app">
      <div>
        <Header></Header>
        <Nav
          categories={categories}
          setCurrentCategory={setCurrentCategory}
          currentCategory={currentCategory}
        ></Nav>
      </div>
      <div id='main'>
        {currentCategory === categories[0] && <About></About>}
        {currentCategory === categories[1] && <Project></Project>}
        {currentCategory === categories[2] && <Contact></Contact>}
        {currentCategory === categories[3] && <Resume></Resume>}
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;