import React from "react";

function Header() {
  return (<header className="container col align-self-center col-sm col-md col-lg col-xl">
    <h1 className="text-left d-flex flex-row">Alex Van Dyke</h1>
    {/* navigation */}
    <nav className="nav nav-pills flex-column flex-sm-row">
      <div className="col-sm">
        <a
          href="#About-Me"
          className="flex-sm-fill text-sm-center nav-link m-3"
        >
          About Me
        </a>
      </div>
      <div className="col-sm">
        <a
          href="#Portfolio"
          className="flex-sm-fill text-sm-center nav-link m-3"
        >
          Portfolio
        </a>
      </div>
      <div className="col-sm">
        <a href="#Contact" className="flex-sm-fill text-sm-center nav-link m-3">
          Contact
        </a>
      </div>
      <div className="col-sm">
        <a href="#Resume" className="flex-sm-fill text-sm-center nav-link m-3">
          Resume
        </a>
      </div>
    </nav>
  </header>)
}

export default Header;
