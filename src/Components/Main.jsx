import React from "react";
import Card from "./Card";
import Pokeinfo from "./Pokeinfo";
import axios from "axios";
import { useState } from "react";


const Main = () => {
  const[pokeData,setPokeData]=useState()
  return (
    <>
      <div className="container">
        <div className="left-content">
          <Card />
          <Card />
          <Card />
          
          <div className="btn-group">
            <button>Previous</button>
            <button>Next</button>
          </div>
        </div>
      </div>
      <div className="right-content">
        <Pokeinfo />
      </div>
    </>
  );
};

export default Main;
