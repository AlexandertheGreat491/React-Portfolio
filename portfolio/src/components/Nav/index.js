import React from 'react';

function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory
  } = props;

  return (
  <nav>
    {categories.map((category) => (
                <button key={category.name}
                    className={`${currentCategory.name === category.name && 'navActive'
                        }`}>
                    <span onClick={() => setCurrentCategory(category)}>
                        {category.name}
                    </span>
                </button>
            ))}
            
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
  )
} 

export default Nav;