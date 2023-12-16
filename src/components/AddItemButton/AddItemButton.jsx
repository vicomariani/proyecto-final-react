import React from 'react'
import { Button } from 'react-bootstrap'
import { CartContext } from '../../context'
import estilos from './Button.module.css';

export const AddItemButton = ({label = "Agregar al carrito", quantity, handleResetQuantity}) => {

  const { itemCount, setItemCount } = React.useContext(CartContext);

  const handleAddCart = () => {
    setItemCount(itemCount + quantity);
    handleResetQuantity();
  }

  return (
    <Button onClick={handleAddCart} className={estilos.agregar}>{label}</Button>
  )
}