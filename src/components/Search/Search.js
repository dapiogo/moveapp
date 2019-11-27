import React from "react";

const Search = ({ onsubmit, onchange, value }) => (
  <div className="form">
    <form onSubmit={onsubmit}>
      <input type="text" onChange={onchange} value={value} />
      <button>Szukaj</button>
    </form>
  </div>
);

export default Search;
