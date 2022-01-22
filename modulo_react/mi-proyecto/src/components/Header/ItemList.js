import { React, useState, useEffect } from "react";
import ItemCount from "../ItemCount";
import { listado } from "./Item";

export default function ItemList() {
  const [datos, setDatos] = useState([]);
  useEffect(() => {
    let is_ok = true;
    let mostrarDatos = (data) => {
      return data;
    };
    let consultaDatos = (time, task) => {
      return new Promise((resolve, reject) => {
        if (is_ok) {
          setTimeout(() => {
            resolve(task);
          }, time);
        } else {
          reject("Error");
        }
      });
    };
    consultaDatos(2000, mostrarDatos(listado))
      .then((respuesta) => setDatos(respuesta))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="itemList">
      {datos.map((producto) => (
        <div className="itemList__item" key={producto.id}>
          <div className="itemList__cod">Cod: {producto.id}</div>
          <div className="itemList__titulo">{producto.name}</div>
          <div className="itemList__img">
            <img src={producto.image} alt={producto.name} />
          </div>
          <ItemCount
            titulo={producto.name}
            min={1}
            max={producto.stock}
            onAdd={CargarItem}
          />
        </div>
      ))}
    </div>
  );
}

const CargarItem = (a, b) => {
  alert(`Se agrego al carrito ${b} - ${a} unidades`);
};
