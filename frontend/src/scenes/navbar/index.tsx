import React from "react";
import {
  Container,
  Navbar,
  Nav
} from "react-bootstrap";
import { BsFillMoonFill, BsMoon, BsFillCartFill } from "react-icons/bs";
import { useCustomDispatch, useCustomSelector } from "../../hooks/redux";
import { setMode, setLogout } from "../../redux/slice/auth";

function NavBar() {

  const dispatch = useCustomDispatch();

  const { auth } = useCustomSelector((state) => state)
  const isColor = auth.mode


  const logout = () => {
    dispatch(setLogout());
    window.location.href = 'home'
  }

  return (
    <>
      <Navbar bg={isColor} expand="lg" variant={isColor}>
        <Container fluid>
          <Navbar.Brand href="home">NOBULL</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="home">Home</Nav.Link>
              <Nav.Link href="shop">Shop</Nav.Link>
              <Nav.Link href="contact">Contact</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link  
                role="button" 
                onClick={() =>dispatch(setMode())}
              >
                {isColor === "white" ? <BsFillMoonFill /> : <BsMoon />}
              </Nav.Link>
              {auth.user === null ? <Nav.Link href="login"><BsFillCartFill /></Nav.Link> : <Nav.Link href="card"><BsFillCartFill /></Nav.Link>}
              {auth.user === null ? (
                <Nav.Link href="login">Log In</Nav.Link> 
              ) : ( 
                <Nav.Link onClick={() => logout()}>Log Out</Nav.Link>
              )}
            </Nav>
            <Nav>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}


export default NavBar;