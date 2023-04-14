import '../App.css';
import {Nav, Navbar, Container, NavDropdown} from 'react-bootstrap';
import '../App' 
import React, {useContext, useEffect, useRef } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

interface ContextType {
    profilePhotoUrl: string;
  }
  
  const AppContext = React.createContext<ContextType>({
    profilePhotoUrl: "",
  });

const Header = () => {
    const appContext = useContext(AppContext);
  
    return (
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#">My App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav>
              <NavDropdown
                title={
                  <img
                    className="profile-photo"
                    src={appContext.profilePhotoUrl}
                    alt="Profile photo"
                  />
                }
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#">Profile</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#">Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  };

  
  export default Header;