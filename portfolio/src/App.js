import React, { useState } from "react";

// imports the Header component
import Header from "./components/Header";

import Nav from "./components/Nav";
// imports the Footer component
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [pages] = useState([
    {
      name: "About",
    },
    {
      name: "Portfolio",
    },
    {
      name: "Contact",
    },
    {
      name: "Resume",
    }
  ])

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div>
      <header>
      <Header>
            <Nav
              pages={pages}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            ></Nav>
            </Header>
      </header>
      <main>
      <Page currentPage={currentPage}></Page>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
