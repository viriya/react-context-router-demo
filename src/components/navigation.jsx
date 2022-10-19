import { useContext } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import AuthContext from "../context/auth-context";
import doughnut from "../images/doughnut.png";

const Navigation = () => {
  const { user, setUser } = useContext(AuthContext);

  const handleLogout = () => {
    setUser({ isLoggedIn: false, name: "" });
  };

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={doughnut} height="32px" alt="doughnut logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {user.isLoggedIn ? (
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/buy">
                  Buy
                </Nav.Link>
                <Nav.Link as={Link} to="/eat">
                  Eat
                </Nav.Link>
              </Nav>
            ) : (
              ""
            )}
            {user.isLoggedIn ? (
              <Nav className="d-flex">
                <NavDropdown title={user.name} id="basic-nav-dropdown">
                  <NavDropdown.Item onClick={handleLogout}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            ) : (
              <Nav className="d-flex">
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
