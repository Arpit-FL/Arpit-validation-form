import React from "react";
// import Container from "react-bootstrap/Container";
// import Navbar from "react-bootstrap/Navbar";
import "../Style/NavBar.css";

const NavBar = () => {
  return (
    <>
      <div className="primaryNavbar">
        <h2 className="pH1">Newcomer Jobs Connector</h2>
        <h2 className="pH2">(Pilot Program)</h2>
      </div>
      <div className="descriptionNavbar">
        <p className="descriptionNavbarContent">
          This is platform to facilitate connections between newcomers seeking
          work and companies looking to hire. Newcomers can submite their own
          information or the ability of NGOs to submite their own behalf.
          Companies will be able to search candidates by skill, location and
          other key attributes
        </p>
      </div>

      <br />
    </>
  );
};

export default NavBar;
