import React from 'react';


const SearchBox = ({search, searchChange}) => {
  return(
    <div className="pa2">
      <input 
            type="search" 
            placeholder="Search Robots"
            className="pa3 ba b--green bg-lightest-blue tc"
            onChange={searchChange} />
    </div>
  )
}

export default SearchBox;