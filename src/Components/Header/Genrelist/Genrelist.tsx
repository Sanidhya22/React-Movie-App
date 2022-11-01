import * as React from "react";
import { Component } from "react";
import "./GenreList.scss";
function Genrelist() {
  const Genre = ["ALL", "DOCUMENTRY", "COMEDY", "HORROR", "CRIME"];
  const [Curgenre, setCurgenre] = React.useState("ALL");
  return (
    <div className="Genre">
      {Genre.map((i, j) => {
        return (
          <button
            key={j}
            className={Curgenre == i ? "Onclick" : ""}
            onClick={() => {
              setCurgenre(i);
            }}
          >
            {i}
          </button>
        );
      })}
    </div>
  );
}
export default Genrelist;
