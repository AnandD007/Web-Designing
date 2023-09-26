import '../../App.css';
import 'react-bootstrap';
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';
import '../../App'
import React, { useContext } from "react";

interface ContextType {
  profilePhotoUrl: string;
}

const AppContext = React.createContext<ContextType>({
  profilePhotoUrl: "/images/gradientImage-2.jpg",
});

function Header() {
  const appContext = useContext(AppContext);

  return (
    <Navbar bg="light" expand="lg" className='font-weight-bold navbar navbar-expand-lg navbar-light fixed-top shadow-lg'>
      <Container>
        <Navbar.Brand href="#">Product Shopping</Navbar.Brand>
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