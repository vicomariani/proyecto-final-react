import React from "react";
import { Button } from "react-bootstrap";
import { AddItemButton } from "../AddItemButton";
import estilos from './quantity.module.css';

export const ItemQuantitySelector = () => {

  const [quantity, setQuantity] = React.useState(1);

  const arr = [
    1, 2
  ]

  const handleAddProduct = () => {
    setQuantity(quantity + 1);
  }

  const handleSubstractProduct = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  const handleResetQuantity = () => {
    setQuantity(1);
  }

  return (
    <div>
      <Button onClick={handleSubstractProduct} className={estilos.botones} >-</Button>
      <input className={estilos.input} type="number" value={quantity} disabled/>
      <Button onClick={handleAddProduct} className={estilos.botones} >+</Button>
      <AddItemButton quantity={quantity} handleResetQuantity={handleResetQuantity}/>
    </div>
  );
};