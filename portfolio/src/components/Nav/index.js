import React from 'react';

function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory
  } = props;

  return (
  <nav >
    {categories.map((category) => (
                <button id='nav-item'  key={category.name}
                    className={`${currentCategory.name === category.name && 'navActive'
                        }`}>
                    <span onClick={() => setCurrentCategory(category)}>
                        {category.name}
                    </span>
                </button>
            ))}
  </nav>
  )
} 

export default Nav;