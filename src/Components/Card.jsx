import React from "react";
import charmander from "../../src/Components/images/charmander.png";

const Card = () => {
  return (
    <>
      <div className="card">
        <h2>1</h2>
        <img src={charmander} alt="" />
        <h2>Charmander</h2>
      </div>
    </>
  );
};

export default Card;
