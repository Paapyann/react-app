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
import { FaList } from "react-icons/fa";
import { Link } from "react-router-dom";

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Link to="/">
          <Navbar.Brand href="#home">To-do Project</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"></Nav>
        </Navbar.Collapse>
        <NavDropdown title="Menu" id="basic-nav-dropdown">
          <Link to="/contact">
            <NavDropdown.Item href="#action/3.2">Contact us</NavDropdown.Item>
          </Link>
          <NavDropdown.Divider />
          <Link to="/about">
            <NavDropdown.Item href="#action/3.4">About us</NavDropdown.Item>
          </Link>
        </NavDropdown>
        {/* <FaList /> */}
      </Container>
    </Navbar>
  );
}

export default BasicExample;
