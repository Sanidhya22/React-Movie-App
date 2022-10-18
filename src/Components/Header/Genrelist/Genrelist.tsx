import * as React from "react";
import { Component } from "react";
import "./Genrelist.scss";
function Genrelist() {
  const Genre = ["ALL", "DOCUMENTRY", "COMEDY", "HORROR", "CRIME"];
  const [Curgenre, setCurgenre] = React.useState("ALL");
  return (
    <div className="Genre">
      {Genre.map((i) => {
        return (
          <button
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
