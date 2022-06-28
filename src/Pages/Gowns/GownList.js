import React from "react";
import "./gownlist.css";

function GownList({ eachGown }) {
  return (
    <div className="flexing">
      {eachGown.map((eachGown) => {
        const { id, image, name, price } = eachGown;
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

export default GownList;
