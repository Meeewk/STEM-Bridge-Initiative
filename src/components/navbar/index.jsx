import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function CustomNavbar( {homeRef, aboutRef, supportRef} ) {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (where, sectionName) => {
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
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  return (
    <Navbar className="customBar" expand="lg">
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
            <Nav.Link className="subBar" href="" onClick={() => scrollToSection(homeRef, 'home')}>
              <span></span> Our Mission
            </Nav.Link>
            <Nav.Link className="subBar" href="" onClick={() => scrollToSection(aboutRef, 'about')}>
              <span></span> About
            </Nav.Link>
            <Nav.Link className="subBar" href="" onClick={() => scrollToSection(supportRef, 'support')}>
              <span></span> Support Us
            </Nav.Link>
            <Nav.Link className="subBar" as={Link} to="/projects">
              <span></span> Projects
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}