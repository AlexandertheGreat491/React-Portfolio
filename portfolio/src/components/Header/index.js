import React from "react";

function Header(props) {
  const { pages = [], setCurrentPage, currentPage } = props;

  return (
    <header className="container col align-self-center col-sm col-md col-lg col-xl">
      <h1 className="text-left d-flex flex-row">Alex Van Dyke</h1>
      {/* navigation */}
      <nav className="nav nav-pills flex-column flex-sm-row">
        <ul>
          {pages.map((Page) => (
            <li
              className={`${currentPage.name === Page.name && "highlight"}`}
              key={Page.name}
            >
              <span onClick={() => setCurrentPage(Page)}>{Page.name}</span>
            </li>
          ))}
        </ul>
        <div className="col-sm">
          <a
            href="#About-Me"
            id="nav-item"
            className="flex-sm-fill text-sm-center nav-link m-3"
          >
            About Me
          </a>
        </div>
        <div className="col-sm">
          <a
            href="#Portfolio"
            id="nav-item"
            className="flex-sm-fill text-sm-center nav-link m-3"
          >
            Portfolio
          </a>
        </div>
        <div className="col-sm">
          <a
            href="#Contact"
            id="nav-item"
            className="flex-sm-fill text-sm-center nav-link m-3"
          >
            Contact
          </a>
        </div>
        <div className="col-sm">
          <a
            href="#Resume"
            id="nav-item"
            className="flex-sm-fill text-sm-center nav-link m-3"
          >
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
