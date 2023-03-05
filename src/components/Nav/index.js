import React from 'react';
// imports the right angle arrow icon
import { FaAngleRight } from 'react-icons/fa';

function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory
  } = props;

  return (
  <nav id='navigation' className='container justify-content-center d-inline-flex flex-row mt-5 w-100'>
     
    {categories.map((category) => (
     
                <button id='nav-item'   key={category.name}
                    className={`${currentCategory.name === category.name && 'navActive'
                       }`} style={{width:"20%", height: "15%"}} >
                        <FaAngleRight id='angle'/>
                    <span onClick={() => setCurrentCategory(category)}>
                        {category.name}
                    </span>
                </button> 
            ))}
            
  </nav>
  )
} 

export default Nav;