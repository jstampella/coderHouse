import React from "react";
import ItemCount from "./ItemCount";
import ItemList from "./Header/ItemList";

export default function ItemListConteiner() {
  const CargarItem = (a, b) => {
    alert(`Se agrego al carrito ${b} - ${a} unidades`);
  };
  return (
    <>
      <ItemList />
    </>
  );
}
