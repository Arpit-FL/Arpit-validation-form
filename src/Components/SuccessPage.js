import React from "react";
import { TiTick } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
const SuccessPage = () => {
  const navigate = useNavigate();
  const handleNav = () => {
    navigate("/");
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "6px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TiTick style={{ fontSize: "60px", color: "green" }} />
        <h4>Thank you for submitting your info,</h4>
        <h4>we'll contact you soon</h4>
      </div>
      <button
        onClick={handleNav}
        style={{
          width: "180px",
          height: "2rem",
          border: "none",
          outline: "none",
          backgroundColor: "dodgerblue",
          padding: "2px 4px",
          color: "white",
          borderRadius: "6px",
        }}
      >
        {" "}
        Go to Home page
      </button>
    </div>
  );
};

export default SuccessPage;
