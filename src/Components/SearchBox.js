import React from'react';
const SearchBox = (props) =>{
  const searchChange = props.searchChange;
  return(
    <div className="pa2">
    <input
      className="bg-lightest-blue ba b--green"
      type="search"
      placeholder="Search the List"
      onChange={searchChange}
      aria-label={"Search robots"}
      />
    </div>
  )
}
export default SearchBox;
