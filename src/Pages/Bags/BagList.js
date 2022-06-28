import React from "react";
import "./baglist.css";

function BagList({ eachBag }) {
  return (
    <div className="flexing">
      {eachBag.map((eachBag) => {
        const { id, image, name, price } = eachBag;
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

export default BagList;
