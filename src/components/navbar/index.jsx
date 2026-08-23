import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

export default function CustomNavbar( {homeRef, aboutRef, supportRef} ) {
  const navigate = useNavigate();
  const location = useLocation();
  const [expanded, setExpanded] = useState(false);

  const scrollToSection = (where, sectionName) => {
    setExpanded(false); // Close the menu when a link is clicked
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: sectionName } });
    } else {
      if (where && where.current) {
        const topOffset = 20 * window.innerHeight / 100;
        const elementPosition = where.current.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: elementPosition - topOffset, behavior: "smooth" });
      }
    }
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    setExpanded(false);
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  return (
    <Navbar expanded={expanded} onToggle={setExpanded} className="customBar" expand="lg">
      <Container fluid style={{ width: "100%" }}>
        <Navbar.Brand className="topBar" href="/" onClick={handleLogoClick}>
          STEM Bridge Initiative
        </Navbar.Brand>
        <Navbar.Toggle
          className="collapseBtn"
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse className="subContainer" id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="subBar" href="#" onClick={(e) => { e.preventDefault(); scrollToSection(homeRef, 'home'); }}>
              <span></span> Our Mission
            </Nav.Link>
            <Nav.Link className="subBar" href="#" onClick={(e) => { e.preventDefault(); scrollToSection(aboutRef, 'about'); }}>
              <span></span> About
            </Nav.Link>
            <Nav.Link className="subBar" href="#" onClick={(e) => { e.preventDefault(); scrollToSection(supportRef, 'support'); }}>
              <span></span> Support Us
            </Nav.Link>
            <Nav.Link className="subBar" as={Link} to="/projects" onClick={() => setExpanded(false)}>
              <span></span> Projects
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}