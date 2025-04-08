import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

export default function CustomNavbar( {homeRef, aboutRef, supportRef, contactRef} ) {

  const scrollToSection = (where) => {
    if (where.current) {
      const topOffset = 20 * window.innerHeight / 100;
      const elementPosition = where.current.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementPosition - topOffset, behavior: "smooth" });
    }
  };


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
            <Nav.Link className="subBar" href="" onClick={() => scrollToSection(homeRef)}>
              <span></span> Our Mission
            </Nav.Link>
            <Nav.Link className="subBar" href="" onClick={() => scrollToSection(aboutRef)}>
              <span></span> About
            </Nav.Link>
            <Nav.Link className="subBar" href="" onClick={() => scrollToSection(supportRef)}>
              <span></span> Support Us
            </Nav.Link>
            <Nav.Link className="subBar" href="" onClick={() => scrollToSection(contactRef)}>
              <span></span> Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
