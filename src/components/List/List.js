import React from "react";

const List = ({ data }) => {
  return (
    <>
      {data.map(({ Title: title, Year: year, imdbId: id, Poster: img }) => (
        <div className="item">
          <img src={img} alt={id} />
          <h1>{title}</h1>
          <p>{year}</p>
        </div>
      ))}
    </>
  );
};

export default List;
