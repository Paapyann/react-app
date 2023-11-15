// import { Navbar, Container, Nav } from "react-bootstrap";
// import { Link } from "react-router-dom";

// const NavbarComponent = () => {
//   return (
//     <Navbar bg="primary" data-bs-theme="dark">
//       <Container>
//         <Link to="/">
//           <Navbar.Brand>Navbar</Navbar.Brand>
//         </Link>
//         <Nav className="me-auto">
//           <Link to="/contact">
//             <Navbar.Brand>Contact Us</Navbar.Brand>
//           </Link>
//         </Nav>
//       </Container>
//     </Navbar>
//   );
// };

// export default NavbarComponent;

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Styles from "./styles.module.css";
import { Link } from "react-router-dom";

function BasicExample() {
  return (
    <Navbar expand="lg" className={Styles.bgrnd}>
      <Container>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Navbar.Brand href="#home" style={{ color: "white" }}>
            To-do Project
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"></Nav>
        </Navbar.Collapse>
        <NavDropdown
          title="Menu"
          id="basic-nav-dropdown"
          style={{ color: "white" }}
        >
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <NavDropdown.Item href="#action/3.2">Contact us</NavDropdown.Item>
          </Link>
          <NavDropdown.Divider />
          <Link to="/about" style={{ textDecoration: "none" }}>
            <NavDropdown.Item href="#action/3.4">About us</NavDropdown.Item>
          </Link>
        </NavDropdown>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
