import { React, useState } from "react";
import { Button } from "../common/fn";
import { Row } from "react-bootstrap";

import "./ItemCount.scss";

export default function ItemCount({ titulo, min, max, onAdd }) {
  const [counter, setCounter] = useState(min);
  const incrementCounter = () => {
    if (counter < max) setCounter(counter + 1);
  };
  let decrementCounter = () => {
    if (counter > min) setCounter(counter - 1);
  };
  return (
    <Row className="itemCount">
      <div className="countIncrement">
        <Button
          onClick={decrementCounter}
          content="-"
          variant="countIncrement--count"
        />
        <label className="countIncrement__label">{counter}</label>
        <Button
          onClick={incrementCounter}
          content="+"
          variant="countIncrement--count"
        />
      </div>
      <button className="itemCount__btn" onClick={() => onAdd(counter, titulo)}>
        Agregar al carrito
      </button>
    </Row>
  );
}
