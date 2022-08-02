import React from "react";
import Modal from "./Modal";

function LangSelect(props) {
  return (
    <Modal>
      <div
        className="modal_header"
        style={{ display: "grid", gridTemplateColumns: "1.8fr 0.2fr" }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h3 style={{ alignSelf: "center" }}>Please Choose your language</h3>
          <h3 style={{ alignSelf: "center" }}> Proficiency for {props.lang}</h3>
        </div>

        <div
          onClick={() => {
            props.closeModel(false);
            props.setProficiency("");
          }}
          style={{
            alignSelf: "center",
            justifySelf: "center",
            marginBottom: "50px",
            color: "red",
            cursor: "pointer",
          }}
        >
          x
        </div>
      </div>
      <div
        className="languages"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          alignItems: "center",
        }}
      >
        <button
          style={{
            width: "220px",
            border: "blue 2px solid",
            padding: "2px 4px",
            borderRadius: "8px",
            backgroundColor: "white",
            color: "blue",
          }}
          onClick={() => props.setProficiency("Native")}
        >
          Native
          {props.proficiency === "Native" && (
            <i
              class="fa fa-check"
              style={{ fontSize: "18px", color: "#015201", marginLeft: "5px" }}
            ></i>
          )}
        </button>
        <button
          style={{
            width: "220px",
            backgroundColor: "white",
            border: "blue 2px solid",
            padding: "2px 4px",
            borderRadius: "8px",
            color: "blue",
          }}
          onClick={() => props.setProficiency("Proficient")}
        >
          Proficient
          {props.proficiency === "Proficient" && (
            <i
              class="fa fa-check"
              style={{ fontSize: "18px", color: "#015201", marginLeft: "5px" }}
            ></i>
          )}
        </button>
        <button
          style={{
            width: "220px",
            backgroundColor: "white",
            border: "blue 2px solid",
            padding: "2px 4px",
            borderRadius: "8px",
            color: "blue",
          }}
          onClick={() => props.setProficiency("Fluent")}
        >
          Fluent
          {props.proficiency === "Fluent" && (
            <i
              class="fa fa-check"
              style={{ fontSize: "18px", color: "#015201", marginLeft: "5px" }}
            ></i>
          )}
        </button>
        <button
          style={{
            width: "220px",
            backgroundColor: "white",
            border: "blue 2px solid",
            padding: "2px 4px",
            borderRadius: "8px",
            color: "blue",
          }}
          onClick={() => props.setProficiency("Intermediate")}
        >
          Intermediate
          {props.proficiency === "Intermediate" && (
            <i
              class="fa fa-check"
              style={{ fontSize: "18px", color: "#015201", marginLeft: "5px" }}
            ></i>
          )}
        </button>
        <button
          style={{
            width: "220px",
            backgroundColor: "white",
            border: "blue 2px solid",
            padding: "2px 4px",
            borderRadius: "8px",
            color: "blue",
          }}
          onClick={() => props.setProficiency("Basic")}
        >
          Basic
          {props.proficiency === "Basic" && (
            <i
              class="fa fa-check"
              style={{
                fontSize: "18px",
                color: "#015201",
                marginLeft: "5px",
              }}
            ></i>
          )}
        </button>

        <button
          onClick={props.handleSelectLanguage}
          style={{
            width: "140px",
            backgroundColor: "blue",
            color: "white",
            border: "none",
            padding: "2px 4px",
            borderRadius: "8px",
          }}
        >
          Add Language
        </button>
      </div>
    </Modal>
  );
}

export default LangSelect;
