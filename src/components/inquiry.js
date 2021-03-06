import React from "react";
import "./inquiry.css";

import Image from "./image";

function changeFilter(event) {
  let baseClass = "image-wrapper ";
  const filterClasses = ["hue", "blur", "invert", "saturate", "contrast"];
  const randomFilter =
    filterClasses[Math.floor(Math.random() * filterClasses.length)];

  event.target.className = `${baseClass} ${randomFilter}`;
}

const Inquiry = () => (
  <div className="inquiry">
    <h1>Filtros e imagenes </h1>
    <div className="circle"></div>
    <div className="wrapper">
      <div className="image-wrapper" onMouseOver={changeFilter}>
        <div className="image">
          <Image />
        </div>
        <div className="image">
          <Image />
        </div>
      </div>
    </div>
  </div>
);

export default Inquiry;
