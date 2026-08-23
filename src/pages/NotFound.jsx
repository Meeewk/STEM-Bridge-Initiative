import { Link } from "react-router-dom";
import CustomNavbar from "../components/navbar";
import Footer from "../components/footer";

export default function NotFound() {
  return (
    <>
      <CustomNavbar />
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "60vh",
        textAlign: "center",
        marginTop: "10vh",
        padding: "0 2rem"
      }}>
        <h1 style={{ fontSize: "5rem", color: "#8080f7", fontFamily: "'Antic Slab', serif", marginBottom: "1rem" }}>404</h1>
        <h2 style={{ fontSize: "2rem", color: "rgba(66,66,66,255)", marginBottom: "2rem" }}>Page Not Found</h2>
        <p style={{ fontSize: "1.2rem", color: "#555", marginBottom: "3rem", maxWidth: "600px" }}>
          Oops! It looks like the page you are looking for doesn't exist or has been moved.
        </p>
        <Link to="/" style={{
          padding: "1rem 3rem",
          backgroundColor: "#8080f7",
          color: "white",
          fontSize: "1.2rem",
          fontWeight: "bold",
          borderRadius: "50px",
          textDecoration: "none",
          transition: "all 0.3s ease",
          boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)"
        }}>
          Return Home
        </Link>
      </div>
      <Footer />
    </>
  );
}
