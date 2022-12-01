import * as React from "react";
import { Component } from "react";
import "./GenreList.scss";
const Genre = ["ALL", "DOCUMENTRY", "COMEDY", "HORROR", "CRIME"];
const GenreList: React.FC = () => {
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
};
export default GenreList;
