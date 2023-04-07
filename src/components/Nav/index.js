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
  <nav id='navigation' className='d-inline-flex justify-content-center navbar navbar-expand{-sm|-md|-lg|-xl|-xxl} container-fluid m-2 position-relative'>
     
    {categories.map((category) => (
     
                <button id='nav-item'   key={category.name}
                    className={`${currentCategory.name === category.name && 'navActive'
                       }`} style={{width:"15%", height: "15%"}} >
                        <FaAngleRight id='angle' className='m-1 position-relative d-inline-flex'/>
                    <span onClick={() => setCurrentCategory(category)}>
                        {category.name}
                    </span>
                </button> 
            ))}
            
  </nav>
  )
} 

export default Nav;