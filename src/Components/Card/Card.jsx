import React from "react";
import cardStyle from "./Card.module.css";

export const Card = ({ name, petName }) => {
  return (
    <div className={cardStyle.cardBox}>
      <h3>¡Hola, {name}!</h3>
      <p>Tu mascota, {petName}, fue registrada con éxito.</p>
    </div>
  );
};
