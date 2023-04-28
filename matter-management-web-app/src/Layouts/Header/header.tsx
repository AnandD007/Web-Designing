import '../../App.css';
import 'react-bootstrap';
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';
import '../../App'
import React, { useContext } from "react";

interface ContextType {
  profilePhotoUrl: string;
}

const AppContext = React.createContext<ContextType>({
  profilePhotoUrl: "/res/gradientImage-2.jpg",
});

function Header() {
  const appContext = useContext(AppContext);

  return (
    <Navbar bg="light" expand="lg" className='font-weight-bold navbar navbar-expand-lg navbar-light fixed-top shadow-lg'>
      <Container>
        <Navbar.Brand href="#"><i className="fa fa-users" aria-hidden="true"></i> Laxicon &trade;</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <div className='row'>
                <div className='col d-flex mt-2 profile-name'>Prasanna</div>
                <div className='col'>
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
              <NavDropdown.Item href="#"><i className="fa fa-user" aria-hidden="true"></i> Profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#"><i className="fa fa-sign-out" aria-hidden="true"></i> Logout</NavDropdown.Item>
            </NavDropdown>
            </div>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};


export default Header;