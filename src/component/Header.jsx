import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa"; 
import { MdOutlinePermContactCalendar } from "react-icons/md"; 
import Search from "./Search";
const Header = () => {
  // State to manage the visibility of the search bar
  const [showSearch, setShowSearch] = useState(false);

  const handleSearchClick = () => {
    setShowSearch(!showSearch); // Toggle the search bar visibility
  };

  return (
    <>
      <Navbar
        bg="transparent"
        variant="dark"
        expand="lg"
        sticky="top"
        style={{
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
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
              <LinkContainer to="/movies">
                <Nav.Link>Movies</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/tvshows">
                <Nav.Link>TV Shows</Nav.Link>
              </LinkContainer>
              <Nav.Link onClick={handleSearchClick}>
                <FaSearch />
              </Nav.Link>
              <LinkContainer to="/contact">
                <Nav.Link>
                  <MdOutlinePermContactCalendar />
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {showSearch && <Search />}
    </>
  );
};

export default Header;