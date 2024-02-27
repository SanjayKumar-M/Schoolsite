import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div style={{ height: "100vh", padding: "20px", backgroundColor: "#232323", color: "white" }}>
   
      <p style={{ fontSize: "18px", marginBottom: "30px" }}>
    
        <a href='/' style={{ color: "#87CEFA", textDecoration: "none" }}>
          Saveetha school
        </a>
        
      </p>
      <ul style={{ listStyle: "none", padding: "0" }}>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/" style={{ color: "#87CEFA", textDecoration: "none" }}>
            Homepage
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/about" style={{ color: "#87CEFA", textDecoration: "none" }}>
            About
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/event" style={{ color: "#87CEFA", textDecoration: "none" }}>
            Events
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/contact" style={{ color: "#87CEFA", textDecoration: "none" }}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
