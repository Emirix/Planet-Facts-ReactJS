import React, { useEffect } from "react";
import data from "../planets.js";

export default function Header({ selectData }) {
  const links = data;

  

  return (
    <header>
      <div className="logo">THE PLANETS</div>
      <nav>
        <ul>
          {links.map((val) => {
            return (
              <li
                data-color={val.color}
                key={val.id}
                id={"link-" + val.id}
                onMouseOver={() => {
                  document.querySelector("#link-" + val.id).style.color =
                    val.color;
                }}
                onMouseLeave={() => {
                  document.querySelector("#link-" + val.id).style.color =
                    "white";
                }}
                onClick={() => {
                  selectData(val.id);
                }}
              >
                {val.name.toUpperCase()}
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
