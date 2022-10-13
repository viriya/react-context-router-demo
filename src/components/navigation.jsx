import { useContext } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import AuthContext from "../context/auth-context";
import { Navigate } from "react-router-dom";

const Navigation = () => {
  const { isLoggedIn, setLogin } = useContext(AuthContext);

    const handleLogout = () => {
        setLogin(false)
    }

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Home 
          </Navbar.Brand>

          {isLoggedIn ? (
            <Nav className="d-flex">
              <Nav.Link as={Link} to="/buy">
                Buy
              </Nav.Link>
              <Nav.Link as={Link} to="/sell">
                Sell
              </Nav.Link>
              <Nav.Link onClick={handleLogout}>
                Logout
              </Nav.Link>
            </Nav>
          ) : (
            <Nav className="d-flex">
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            </Nav>
          )}
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
