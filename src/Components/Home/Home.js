import React, { useRef } from "react";

import Button from "react-bootstrap/Button";
import NavBar from "../Navbar/NavBar";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
// import Dropdown from "react-bootstrap/Dropdown";
import { useState, useEffect } from "react";
import "../Style/Home.css";
import LangSelect from "../Modal/LangSelect";
import Spinner from "../Spinner";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const fnameRef = useRef();
  const navigate = useNavigate();
  //Drop down array for state..............
  const [state, setState] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [city, setCity] = useState([]);
  const [show, setShow] = useState(false);
  const [agreement, setAgreement] = useState(false);

  const [skill, setSkill] = useState([]);
  const [skillVal, setSkillVal] = useState("");

  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [closeModel, setCloseModal] = useState(false);
  const [proficiency, setProficiency] = useState("");

  const [data, setData] = useState([]);

  const handleSelectLanguage = () => {
    setData((prevState) => {
      return [
        ...prevState,
        {
          id: new Date().toISOString().trim(),
          proficiency,
          selectedLanguage,
        },
      ];
    });
    const filter_lang = lang.filter((lang) => lang.lang !== selectedLanguage);
    setLang(filter_lang);
    setCloseModal(false);
  };

  const language = [
    { id: 1, lang: "Hindi" },
    { id: 2, lang: "English" },
    { id: 3, lang: "Spanish" },
    { id: 4, lang: "Chinies" },
  ];

  const [lang, setLang] = useState(language);

  const handleLanguageChange = (e) => {
    e.preventDefault();
    setSelectedLanguageValidation(false);
    const selectedLang = e.target.value;
    setSelectedLanguage(selectedLang);
    const language = lang.find((lang) => lang.lang === selectedLang);
    language && setCloseModal(true);
  };

  const handleRemoveLang = (id, name) => {
    const addLang = lang?.find((elem) => elem.name === name);
    const langFound = language.find((elem) => elem.lang === name);

    if (!addLang) {
      setLang((prevState) => [...prevState, langFound]);
    }
    const updatedData = data.filter((data) => {
      return data.id !== id;
    });
    setData(updatedData);
  };
  // console.log({ data });

  const [inputval, setInputval] = useState({
    organisationName: "",
    requesterName: "",
    fname: "",
    lname: "",
    email: "",

    phone: "",
    currentLocation: "",
    requesterNameValidation: false,
    emailValidation: false,
    phoneValidation: false,
    currentLocationValidation: false,
  });

  const [condition, setCondition] = useState(true);

  const [fnameValidation, setFnameValidation] = useState(true);
  const [lnameValidation, setLnameValidation] = useState(true);
  const [emailValidation, setEmailValidation] = useState(true);
  const [phoneValidation, setPhoneValidation] = useState(true);
  const [stateValidation, setStateValidation] = useState(false);
  const [cityValidation, setCityValidation] = useState(false);
  const [spinner, setSpinner] = useState(false);
  const [selectedLanguageValidation, setSelectedLanguageValidation] =
    useState(false);
  const [selectedSkillValidation, setSelectedSkillValidation] = useState(false);
  const [currentLocationValidation, setCurrentLocationValidation] =
    useState(true);
  const [requesterNameValidation, setRequesterNameValidation] = useState(true);
  const [organizationNameValidation, setOrganizationNameValidation] =
    useState(true);

  const {
    organisationName,
    requesterName,
    fname,
    lname,
    email,
    phone,
    currentLocation,
  } = inputval;

  useEffect(() => {
    setState(states);
  }, []);

  const handleState = (id) => {
    setSelectedState(id);
    setStateValidation(false);
    const data = cities.filter((cityArray) => cityArray.statesId === id);
    setCity(data);
  };

  const handleCity = (id) => {
    setSelectedCity(id);
    setCityValidation(false);
  };
  const states = [
    {
      id: "1",
      name: "Maharashtra",
    },
    {
      id: "2",
      name: "Madhya Pradesh",
    },
    {
      id: "3",
      name: "Telangana",
    },
    {
      id: "4",
      name: "Uttar Pradesh",
    },
  ];

  //Array for cities............................
  const cities = [
    { id: "1", statesId: "1", name: "Mumbai" },
    { id: "2", statesId: "1", name: "Pune" },
    { id: "3", statesId: "1", name: "Nagpur" },
    { id: "4", statesId: "1", name: "Thane" },
    { id: "5", statesId: "1", name: "Nashik" },

    { id: "6", statesId: "2", name: "Ratlam" },
    { id: "7", statesId: "2", name: "Indore" },
    { id: "8", statesId: "2", name: "Ujjain" },
    { id: "9", statesId: "2", name: "Bhopal" },
    { id: "10", statesId: "2", name: "Khandwa" },

    { id: "11", statesId: "3", name: "Hyderabad" },
    { id: "12", statesId: "3", name: "Nizamabad" },
    { id: "13", statesId: "3", name: "Karim Nagar" },
    { id: "14", statesId: "3", name: "Khammam" },
    { id: "15", statesId: "3", name: "Mahabub Nagar" },

    { id: "16", statesId: "4", name: "Kanpur" },
    { id: "17", statesId: "4", name: "Lucknow" },
    { id: "18", statesId: "4", name: "Ayodhya" },
    { id: "19", statesId: "4", name: "Gorakhpur" },
    { id: "20", statesId: "4", name: "Ghaziabad" },
  ];

  const skillArray = [
    { id: 14134134, skill: "React Js" },
    { id: 14134135, skill: "Node Js" },
    { id: 14134136, skill: "Mongo DB" },
    { id: 14134137, skill: "Expree Js" },
    { id: 14134138, skill: "Angular Js" },
  ];
  const [skillList, setSkillList] = useState(skillArray);

  const handleSkillChange = (e) => {
    const availabelSkills = skillList.filter(
      (skill) => skill.skill !== e.target.value
    );
    const selectedSkill = skillList.filter(
      (skill) => skill.skill === e.target.value
    );
    setSkillList(availabelSkills);
    setSelectedSkillValidation(false);
    setSkill((prevState) => {
      return [...prevState, { id: selectedSkill[0].id, skill: e.target.value }];
    });
    setSkillVal("");
  };

  const skillRemoveHandler = (id) => {
    console.log({ id });
    const addSkillToArray = skillArray.filter((skill) => skill.id === id);
    console.log({ addSkillToArray });
    setSkillList((prevState) => [...prevState, addSkillToArray[0]]);
    const updatedSkill = skill.filter((skill) => {
      return skill.id !== id;
    });
    updatedSkill && setSkill(updatedSkill);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!condition) {
      return alert("Please select Are you behalf of some one else?");
    } else if (show && !organisationName) {
      setOrganizationNameValidation(false);
      return alert("Please Enter Organisation Name");
    } else if (show && !requesterName) {
      setRequesterNameValidation(false);
      return alert("Please Enter Requester Name");
    } else if (!fname) {
      console.log(fnameRef.current);
      setFnameValidation(false);
      return alert("Please Enter First Name");
    } else if (!lname) {
      setLnameValidation(false);
      return alert("Please Enter Last Name");
    } else if (!email) {
      setEmailValidation(false);
      return alert("Please Enter Email");
    } else if (!phone || phone.length !== 10) {
      setPhoneValidation(false);
      return alert("Please Enter Phone Number Correctly");
    } else if (!currentLocation) {
      setCurrentLocationValidation(false);
      return alert("Please Enter Current Location");
    } else if (!selectedState) {
      setStateValidation(true);
      return alert("Please select state");
    } else if (!selectedCity) {
      setCityValidation(true);
      return alert("Please select City");
    } else if (data.length === 0) {
      setSelectedLanguageValidation(true);
      return alert("Please Select Language");
    } else if (skill.length === 0) {
      setSelectedSkillValidation(true);
      return alert("Please select Skill");
    } else if (!agreement) {
      return alert("Please select Agreement");
    } else {
      setSpinner(true);

      setTimeout(() => {
        setSpinner(false);
        navigate("/success");
      }, 3000);
    }
  };

  const validationFunction = (name, value) => {
    setInputval((prevState) => {
      return { ...prevState, [name]: value };
    });
    name === "fname" && fname && setFnameValidation(/^[a-z- ]+$/i.test(value));
    name === "lname" && lname && setLnameValidation(/^[a-z- ]+$/i.test(value));
    name === "email" &&
      email &&
      setEmailValidation(
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/i.test(value)
      );
    name === "phone" && phone && setPhoneValidation(/^[0-9 ]+$/i.test(value));
    name === "organisationName" &&
      organisationName &&
      setOrganizationNameValidation(/^[a-z- ]+$/i.test(value));
    name === "requesterName" &&
      requesterName &&
      setRequesterNameValidation(/^[a-z- ]+$/i.test(value));
    name === "currentLocation" &&
      currentLocation &&
      setCurrentLocationValidation(/^[a-z- ]+$/i.test(value));
  };

  const handleAgreement = () => {
    setAgreement(!agreement);
  };
  console.log({ agreement });

  const [UploadResume, setUploadResume] = useState("");

  const handleResumeOnchangeHandler = (e) => {
    setUploadResume(e.target.value);
  };
  console.log({ UploadResume: UploadResume?.split("\\").splice(-1) });
  return (
    <div className="main_container">
      {/* ////////////////////////////////////////////////////////////////////////////// */}
      <NavBar />
      <div className="main-heading">
        <div className="form-container">
          <h6>Please enter your information</h6>
          <p>
            <span className="required_fields">*</span>Required Fields
          </p>
          <h6>
            Are you behalf of some one else?
            <span className="required_fields">*</span>
          </h6>
          <Form>
            {["radio"].map((type) => (
              <div key={`reverse-${type}`} className="mb-3">
                <Form.Check
                  onClick={() => {
                    setShow(false);
                    setCondition(false);
                  }}
                  label="No"
                  name="group1"
                  type={type}
                  id={`reverse-${type}-1`}
                />
                <Form.Check
                  onClick={() => {
                    setShow(true);
                    setCondition(false);
                  }}
                  label="Yes"
                  name="group1"
                  type={type}
                  id={`reverse-${type}-2`}
                />
              </div>
            ))}
          </Form>
          {show ? (
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>
                  Organisation Name:<span className="required_fields">*</span>
                </Form.Label>
                <Form.Control
                  name="organisationName"
                  className={`${
                    !organizationNameValidation ? "ouline_style" : ""
                  }`}
                  value={organisationName}
                  onChange={(e) =>
                    validationFunction("organisationName", e.target.value)
                  }
                  type="text"
                  placeholder="Enter First Name"
                />
              </Form.Group>
            </Form>
          ) : null}
          {show ? (
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>
                  Requester Name:
                  <span className="required_fields">*</span>
                </Form.Label>
                <Form.Control
                  name="requesterName"
                  value={requesterName}
                  className={`${
                    !requesterNameValidation ? "ouline_style" : ""
                  }`}
                  onChange={(e) =>
                    validationFunction("requesterName", e.target.value)
                  }
                  type="email"
                  placeholder="Enter requester Name "
                />
              </Form.Group>
            </Form>
          ) : null}
          {/* onChange={getInputData} */}
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>
                First Name:<span className="required_fields">*</span>
              </Form.Label>
              <Form.Control
                className={`${!fnameValidation ? "ouline_style" : ""}`}
                name="fname"
                value={fname}
                onChange={(e) => validationFunction("fname", e.target.value)}
                type="text"
                placeholder="Enter First Name"
                ref={fnameRef}
              />
            </Form.Group>
          </Form>

          <Form>
            {/* onChange={getInputData} */}
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>
                Last Name:<span className="required_fields">*</span>
              </Form.Label>
              <Form.Control
                name="lname"
                className={`${!lnameValidation ? "ouline_style" : ""}`}
                value={lname}
                onChange={(e) => validationFunction("lname", e.target.value)}
                type="email"
                placeholder="Enter Last Name"
              />
            </Form.Group>
          </Form>

          <Form>
            {/* onChange={getInputData} */}
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>
                Email:<span className="required_fields">*</span>
              </Form.Label>
              <Form.Control
                name="email"
                className={`${!emailValidation ? "ouline_style" : ""}`}
                value={email}
                onChange={(e) => validationFunction("email", e.target.value)}
                type="email"
                placeholder="Enter Email"
              />
            </Form.Group>
          </Form>

          <Form>
            {/* onChange={getInputData} */}
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>
                Phone No.<span className="required_fields">*</span>
              </Form.Label>
              <Form.Control
                name="phone"
                className={`${!phoneValidation ? "ouline_style" : ""}`}
                value={phone}
                onChange={(e) => validationFunction("phone", e.target.value)}
                type="phone"
                placeholder="Enter Phone No"
              />
            </Form.Group>
          </Form>

          <>
            <Form.Label>
              Current Location<span className="required_fields">*</span>
            </Form.Label>
            <InputGroup className="mb-3" controlId="exampleForm.ControlInput1">
              {/* onChange={getInputData} */}
              <InputGroup.Text id="basic-addon1">🧭</InputGroup.Text>
              <Form.Control
                placeholder="Enter Current Location"
                className={`${
                  !currentLocationValidation ? "ouline_style" : ""
                }`}
                aria-label="Username"
                aria-describedby="basic-addon1"
                name="currentLocation"
                value={currentLocation}
                onChange={(e) =>
                  validationFunction("currentLocation", e.target.value)
                }
                type="currentLocation"
              />
            </InputGroup>

            {/* ...........Select State Drop Down............. */}
            <Form.Label>
              State<span className="required_fields">*</span>
            </Form.Label>
            <select
              className={`form-control ${
                stateValidation ? "ouline_style" : ""
              }`}
              onChange={(e) => {
                handleState(e.target.value);
              }}
            >
              <option value="0">Select State</option>
              {state && state !== undefined
                ? state.map((statobj, index) => {
                    return (
                      <option key={index} value={statobj.id}>
                        {statobj.name}
                      </option>
                    );
                  })
                : "No State"}
            </select>

            {/* ...........Select State Drop Down............. */}

            <Form.Label style={{ marginTop: "5px" }}>
              City<span className="required_fields">*</span>
            </Form.Label>

            <select
              className={`form-control ${cityValidation ? "ouline_style" : ""}`}
              onChange={(e) => {
                handleCity(e.target.value);
              }}
            >
              <option value="0">Select City</option>
              {city && city !== undefined
                ? city.map((statobj, index) => {
                    return (
                      <option key={index} value={statobj.id}>
                        {statobj.name}
                      </option>
                    );
                  })
                : "No City"}
            </select>

            <Form.Label style={{ marginTop: "5px" }}>
              Language<span className="required_fields">*</span>
            </Form.Label>
            <select
              className={`form-control ${
                selectedLanguageValidation ? "ouline_style" : ""
              }`}
              onChange={handleLanguageChange}
              name=""
              id=""
            >
              <option value="">Please Select Language</option>
              {lang.map((lang) => (
                <option value={lang.lang} key={lang.id}>
                  {lang.lang}
                </option>
              ))}
            </select>

            <div
              className="selected_lang"
              style={{ display: "flex", gap: "8px" }}
            >
              {data?.map((elem) => (
                <>
                  <div
                    style={{
                      width: "max-content",
                      backgroundColor: "#65acf4",
                      padding: "1px 4px",
                      borderRadius: "6px",
                      marginTop: "12px",
                    }}
                    onClick={() =>
                      handleRemoveLang(elem.id, elem.selectedLanguage)
                    }
                  >
                    {elem.selectedLanguage} ({elem.proficiency})
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "red",
                        cursor: "pointer",
                      }}
                    >
                      X
                    </span>
                  </div>
                </>
              ))}
            </div>
            {closeModel && (
              <LangSelect
                closeModel={setCloseModal}
                setProficiency={setProficiency}
                proficiency={proficiency}
                handleSelectLanguage={handleSelectLanguage}
              />
            )}

            <Form.Label style={{ marginTop: "8px" }}>
              Skills<span className="required_fields">*</span>
            </Form.Label>
            <select
              className={`form-control ${
                selectedSkillValidation ? "ouline_style" : ""
              }`}
              onChange={handleSkillChange}
              name=""
              id=""
              value={skillVal}
            >
              <option value="" style={{ display: "none" }}>
                Choose Skills
              </option>
              {skillList.map((skill) => (
                <option key={skill.id} value={skill.skill}>
                  {skill.skill}
                </option>
              ))}
              {/* <option value="React Js">React Js</option>
              <option value="Node Js">Node Js</option>
              <option value="MongoDB">MongoDB</option>
              <option value="Express Js">Express Js</option>
              <option value="Angular Js">Angular Js</option> */}
            </select>
            <div style={{ display: "flex", gap: "8px" }}>
              {skill.map((skill) => (
                <div
                  style={{
                    width: "max-content",
                    backgroundColor: "#65acf4",
                    padding: "1px 4px",
                    borderRadius: "6px",
                    marginTop: "15px",
                  }}
                >
                  {skill.skill}{" "}
                  <button
                    style={{
                      fontWeight: "bolder",
                      color: "red",
                      cursor: "pointer",
                      border: "none",
                      outline: "none",
                      backgroundColor: "#65acf4",
                    }}
                    onClick={() => skillRemoveHandler(skill.id)}
                  >
                    X
                  </button>
                </div>
              ))}
            </div>
            {/* //////// */}
            <Form.Label style={{ marginTop: "8px" }}>Mobility</Form.Label>
            <select name="" id="" className="form-control">
              <option value="" style={{ display: "none" }}>
                Select Mobility
              </option>
              <option>A</option>
              <option>B</option>
              <option>C</option>
            </select>

            <div
              style={{
                display: "flex",
                width: "100%",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: "30px",
                marginBottom: "20px",
              }}
            >
              <h5>Resume Upload</h5>
              <input
                onChange={(e) => handleResumeOnchangeHandler(e)}
                type="file"
                id="files"
                class="hidden"
                accept=".pdf,.doc"
                style={{ display: "none" }}
              />
              <label
                for="files"
                style={{
                  width: "150px",
                  height: "28px",
                  borderRadius: "6px",
                  backgroundColor: "white",
                  outline: "#023364 solid 3px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#023364",
                }}
              >
                Upload File
              </label>
            </div>
            {UploadResume && (
              <div style={{ display: "flex" }}>
                <input
                  className="form-control"
                  value={UploadResume?.split("\\").splice(-1)[0]}
                />
                <span>
                  <Button onClick={() => setUploadResume("")}>X</Button>
                </span>
              </div>
            )}
            <br />
            <div
              style={{
                display: "flex",
                width: "100%",
                height: "40px",
                gap: "5px",
              }}
              className="agreementBox"
            >
              <Form.Check onClick={handleAgreement} aria-label="option 1" />
              <p>
                I Agree To Share Above Personal Information In Compliance With
                The
                <a href="/"> Data and Privacy Policy</a>
              </p>
            </div>
            <div className="btn_container">
              {spinner && <Spinner className="spinner_1" />}
              <Button
                disabled={spinner}
                onClick={handleSubmit}
                variant="primary"
                type="submit"
                style={{
                  width: "120px",
                  justifySelf: "center",
                  alignSelf: "center",
                  marginTop: "15px",
                  marginBottom: "10px",
                }}
              >
                Submit
              </Button>
            </div>
          </>
        </div>
      </div>
    </div>
  );
};

export default Home;
