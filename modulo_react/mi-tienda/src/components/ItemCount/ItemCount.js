import { React, useState } from "react";
import { Button } from "../common/fn";
import { Row } from "antd";

import "./ItemCount.scss";

export default function ItemCount({ id, min, max, init, onAdd }) {
  const [counter, setCounter] = useState(init === 0 ? 1 : init);
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
      {max < 1 ? (
        <label className="itemCount__lbl">Sin Stock</label>
      ) : (
        <button className="itemCount__btn" onClick={() => onAdd(counter)}>
          Agregar al carrito
        </button>
      )}
    </Row>
  );
}
