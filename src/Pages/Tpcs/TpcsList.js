import React from "react";
import "./tpcslist.css";

function TpcsList({ eachTpcs }) {
  return (
    <div className="flexing">
      {eachTpcs.map((eachTpcs) => {
        const { id, image, name, price } = eachTpcs;
        return (
          <article key={id} className="listdisp">
            <div>
              <img src={image} alt={name} className="display-img"></img>
              <h5 className="display-name">{name}</h5>
              <h4 className="display-price">{price}</h4>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default TpcsList;
