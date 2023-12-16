import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import { CartContext } from "../../context";


const CartWidgetComponent = () => {

  const { itemCount } = React.useContext(CartContext);

  const iconStyles = {
        fontSize: '25px',
        paddingRight: '8px',
        color: 'white'
  };
  return (
    <div>
      <FontAwesomeIcon style={iconStyles} icon={faCartShopping} />
      <span style={{ fontSize: "20px", color: "white", fontWeight: "500"}}>{itemCount}</span>
    </div>
  );
};

export default CartWidgetComponent;