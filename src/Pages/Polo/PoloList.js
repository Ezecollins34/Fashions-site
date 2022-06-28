import React from "react";
import "./pololist.css";

function PoloList({ eachPolo }) {
  return (
    <div className="flexing">
      {eachPolo.map((eachPolo) => {
        const { id, image, name, price } = eachPolo;
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

export default PoloList;
