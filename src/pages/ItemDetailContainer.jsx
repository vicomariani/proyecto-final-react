import React from "react";
import Card from "react-bootstrap/Card";

import { useParams } from "react-router-dom";
import { useSingleProduct } from "../hooks/useProducts";
import { ItemQuantitySelector } from "../components";

import estilos from "./page.module.css";

export const ItemDetailContainer = () => {
  const { productId } = useParams();

  const { product, loading, error } = useSingleProduct(productId);

  return (
    <Card key={product.id} className={estilos.individual}>
      <Card.Img variant="top" src={product.thumbnail} className={estilos.imagen} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
      </Card.Body>
      <ItemQuantitySelector />
    </Card>
  );
};