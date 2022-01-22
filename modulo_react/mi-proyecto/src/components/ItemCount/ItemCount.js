import { React, useEffect, useState } from "react";
import { Row } from "react-bootstrap";

import "./ItemCount.scss";

export default function ItemCount({ titulo, min, max, onAdd }) {
  const [item, setItem] = useState(min);
  return (
    <Row className="itemCount">
      <CounterInput
        max={max}
        min={min}
        onChange={(value) => {
          //console.log(value);
          setItem(value);
        }}
        value={min}
      />
      <button className="itemCount__btn" onClick={() => onAdd(item, titulo)}>
        Agregar al carrito
      </button>
    </Row>
  );
}

function CounterInput({ min, max, onChange, value }) {
  const [counter, setCounter] = useState(value);
  const incrementCounter = () => setCounter(counter + 1);
  let decrementCounter = () => setCounter(counter - 1);
  if (counter < min) {
    setCounter(min);
  } else if (counter > max) {
    setCounter(max);
  }
  useEffect(() => {
    onChange(counter);
  }, [counter, onChange]);
  return (
    <div className="countIncrement">
      <ButtonDecrement onClickFunc={decrementCounter} />
      <Display message={counter} />
      <ButtonIncrement onClickFunc={incrementCounter} />
    </div>
  );
}

function ButtonIncrement({ onClickFunc }) {
  return (
    <button className="countIncrement__btnCount" onClick={onClickFunc}>
      +
    </button>
  );
}

function ButtonDecrement({ onClickFunc }) {
  return (
    <button className="countIncrement__btnCount" onClick={onClickFunc}>
      -
    </button>
  );
}

function Display({ message }) {
  return <label className="countIncrement__label">{message}</label>;
}
