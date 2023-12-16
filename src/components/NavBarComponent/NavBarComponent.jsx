import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidgetComponent from "../CartWidgetComponent/CartWidgetComponent";
import estilos from "./Navbar.module.css";

import { Link } from "react-router-dom";

export const NavBarComponent = () => {
  return (
    <Navbar expand="lg" className={estilos.navegador}>
      <Container>
      <Navbar.Brand>
           <Link to={"/"}>
             <img src="../img/logo.png" className={estilos.logo} alt="logo"/>
           </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className={estilos.home} to="/">Home</Link>

            <NavDropdown title={<span className={estilos.boton}>Categorías</span>}>
              <NavDropdown.Item href="#action/3.1">
                <Link className={estilos.categorias} to={"/category/laptops"}>Laptops</Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                <Link className={estilos.categorias} to={"/category/smartphones"}>Smartphones</Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <CartWidgetComponent />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};