import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

export default function CustomNavbar() {
  return (
    <Navbar className="customBar" expand="lg">
      <Container fluid style={{ width: "100%" }}>
        <Navbar.Brand className="topBar" href="#">
          STEM Bridge Initiative
        </Navbar.Brand>
        <Navbar.Toggle
          className="collapseBtn"
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse className="subContainer" id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="subBar" href="#">
              <span></span> Home
            </Nav.Link>
            <Nav.Link className="subBar" href="#">
              <span></span> About
            </Nav.Link>
            <Nav.Link className="subBar" href="#">
              <span></span> Support Us
            </Nav.Link>
            <Nav.Link className="subBar" href="#">
              <span></span> Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
