import React from "react";


function Nav(props) {
  const { categories = [], setCurrentCategory, currentCategory } = props;

  return (
    
    <nav
      id="navigation"
      className="d-inline-flex justify-content-center navbar dropdown navbar-expand{-sm|-md|-lg|-xl|-xxl} container-fluid ms-5 mt-2 position-relative"
      style={{width:"55%", height: "25%"}}
    >
      {categories.map((category) => (
        <li
          id="nav-item"
          key={category.name}
          className={`${currentCategory.name === category.name && "navActive" && "d-inline-flex" && "align-items-center" && "position-absolute" && "mb-3"}`}
          style={{ width: "15%", height: "15%" }}
        >
          <span className="d-inline-flex" onClick={() => setCurrentCategory(category)}>
            {category.name}
          </span>
        </li>
      ))}
    </nav>
  );
}

export default Nav;
