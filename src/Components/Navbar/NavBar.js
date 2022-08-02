import React from "react";
// import Container from "react-bootstrap/Container";
// import Navbar from "react-bootstrap/Navbar";
import "../Style/NavBar.css";

const NavBar = () => {
  return (
    <>
      <div className="primaryNavbar">
        <h2 style={{ padding: "8px" }}>NewComer jobs Connector</h2>
        <h2 style={{ paddingBottom: "14px" }}>(Pilot Program)</h2>
      </div>
      <div className="descriptionNavbar">
        <p>
          This is platform to facilitate connection between newcomers seeking
          work and companies. Newcomers can submite thier own information or the
          ability of NGO's to submite their own behalf. Companies will be able
          to search candidates by skill, location and other key atributes
        </p>
      </div>

      <br />
    </>
  );
};

export default NavBar;
