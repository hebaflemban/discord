import React from "react";


const SearchBar = props => {


  return (
    <div className="my-3 mx-3">
      <input
        className="form-control bg-light rounded-pill"
        placeholder={props.placeholder}
        name="search"
        type="text"
        onChange={(e) => props.onChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
