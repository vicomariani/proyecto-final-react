import Card from 'react-bootstrap/Card';
import React from "react";
import { Link, useParams } from "react-router-dom";
import estilos from './Item.module.css';

export const ItemListContainer = ({ products }) => {
   
  return (
    <div className={estilos.inicio} >

      {products.map((product) => {
        return (
          <Card key={product.id} className={estilos.producto}>
            <Link to={`/item/${product.id}`}>
              <Card.Img variant="top" src={product.thumbnail} />
            </Link>
            <Card.Body>
              <Card.Title className={estilos.titulo} >{product.title}</Card.Title>
              <Card.Text className={estilos.descripcion} >{product.description}</Card.Text>
              <Card.Text className={estilos.precio}>Precio: ${product.price}</Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};