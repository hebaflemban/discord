import React from "react";


const SearchBar = props => {


  return (
    <div className="input-group my-3">
      <input
        className="form-control bg-light border-0 small"
        placeholder={props.placeholder}
        name="search"
        type="text"
        onChange={(e) => props.onChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
