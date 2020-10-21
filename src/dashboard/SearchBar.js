import React from "react";


const SearchBar = props => {
 

  return (
    <div className="form-group col-lg-6 col-12 mx-auto">
      <div className="input-group my-3">
        <input
          className="form-control"
          placeholder={props.placeholder}
          name="search"
          type="text"
          onChange={(e) => props.onChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchBar;
