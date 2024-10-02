import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src="https://movix-app-murex.vercel.app/assets/movix-logo-HTlvmwAF.svg"
            className="d-inline-block align-top"
            alt="Movix logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {" "}
            <LinkContainer to="/movie">
              <Nav.Link>Movies</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/tvShow">
              <Nav.Link>TV Shows</Nav.Link>
            </LinkContainer>
            <Nav.Link href="#search">
              <FaSearch />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;