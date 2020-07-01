import React from "react";
import "./inquiry.css";

import Image from "./image";

const Inquiry = ({ data }) => (
  <div className="inquiry">
    {console.log(data)}

    <h1>Filtros e imagenes </h1>
    <div className="circle"></div>
    <div>
      <Image />
    </div>
  </div>
);

export default Inquiry;
