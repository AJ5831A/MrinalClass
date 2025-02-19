import React from "react";
import "./Card.css";

function Card({ title, description }) {
  return (
    <div className="card">
      <div className="card-title">{title} </div>
      <div className="card-description">{description}</div>
    </div>
  );
}

export default Card;
