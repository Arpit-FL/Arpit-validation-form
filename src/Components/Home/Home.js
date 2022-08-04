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
  const lnameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const locationRef = useRef();
  const stateRef = useRef();
  const cityRef = useRef();
  const languageRef = useRef();
  const skillsRef = useRef();
  const checkBoxRef = useRef();
  const organisationRef = useRef();
  const requesterRef = useRef();
  const radioBoxRef = useRef();
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

  console.log(selectedLanguage);

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
    setProficiency("");
  };

  const language = [
    { id: 1, lang: "Hindi" },
    { id: 2, lang: "English" },
    { id: 3, lang: "Spanish" },
    { id: 4, lang: "Chinese" },
  ];

  const [frictionalVal, setFrictionalVal] = useState(false);

  console.log({ frictionalVal });

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
    setSelectedLanguage("");
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

  const [condition, setCondition] = useState(false);

  const [fnameValidation, setFnameValidation] = useState(true);
  const [radioBoxValidation, setRadioBoxValidation] = useState(true);
  const [lnameValidation, setLnameValidation] = useState(true);
  const [emailValidation, setEmailValidation] = useState(true);
  const [phoneValidation, setPhoneValidation] = useState(true);
  const [stateValidation, setStateValidation] = useState(false);
  const [cityValidation, setCityValidation] = useState(false);
  const [spinner, setSpinner] = useState(false);
  const [selectedLanguageValidation, setSelectedLanguageValidation] =
    useState(false);
  const [selectedSkillValidation, setSelectedSkillValidation] = useState(false);
  const [checkBOxValidation, setCheckBOxValidation] = useState(true);
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

  // const [selectedCityValue, setSelectedCityValue] = useState("")

  const handleState = (id) => {
    setSelectedState(id);
    setStateValidation(false);
    const data = cities[id];
    setCity(data);
    setSelectedCity("");
  };

  const handleCity = (id) => {
    setSelectedCity(id);
    setCityValidation(false);
  };

  console.log({ selectedCity });
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
  const cities = {
    1: [
      { id: "1", name: "Mumbai" },
      { id: "2", name: "Pune" },
      { id: "3", name: "Nagpur" },
      { id: "4", name: "Thane" },
      { id: "5", name: "Nashik" },
    ],

    2: [
      { id: "6", name: "Ratlam" },
      { id: "7", name: "Indore" },
      { id: "8", name: "Ujjain" },
      { id: "9", name: "Bhopal" },
      { id: "10", name: "Khandwa" },
    ],

    3: [
      { id: "11", name: "Hyderabad" },
      { id: "12", name: "Nizamabad" },
      { id: "13", name: "Karim Nagar" },
      { id: "14", name: "Khammam" },
      { id: "15", name: "Mahabub Nagar" },
    ],

    4: [
      { id: "16", name: "Kanpur" },
      { id: "17", name: "Lucknow" },
      { id: "18", name: "Ayodhya" },
      { id: "19", name: "Gorakhpur" },
      { id: "20", name: "Ghaziabad" },
    ],
  };

  // console.log("called");
  // useEffect(() => {
  //   setSelectedLanguage("Please Select Language");
  //   console.log("arpit");
  // }, [selectedLanguage]);

  const skillArray = [
    { id: 14134134, skill: "React Js" },
    { id: 14134135, skill: "Node Js" },
    { id: 14134136, skill: "Mongo DB" },
    { id: 14134137, skill: "Express Js" },
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
    // console.log({ id });
    const addSkillToArray = skillArray.filter((skill) => skill.id === id);
    // console.log({ addSkillToArray });
    setSkillList((prevState) => [...prevState, addSkillToArray[0]]);
    const updatedSkill = skill.filter((skill) => {
      return skill.id !== id;
    });
    updatedSkill && setSkill(updatedSkill);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    !condition && setRadioBoxValidation(false);

    ((show && !organisationName) || (show && !organizationNameValidation)) &&
      setOrganizationNameValidation(false);

    show && !requesterName && setRequesterNameValidation(false);

    (!fname || !fnameValidation) && setFnameValidation(false);
    (!lname || !lnameValidation) && setLnameValidation(false);
    (!email || !emailValidation) && setEmailValidation(false);

    (!phone || phone.length !== 10 || !phoneValidation) &&
      setPhoneValidation(false);

    (!currentLocation || !currentLocationValidation) &&
      setCurrentLocationValidation(false);

    !selectedState && setStateValidation(true);
    !selectedCity && setCityValidation(true);

    data.length === 0 && setSelectedLanguageValidation(true);
    skill.length === 0 && setSelectedSkillValidation(true);
    !agreement && setCheckBOxValidation(false);

    if (!condition) {
      setTimeout(() => {
        return alert(
          "Please let us know, are you applying on behalf of someone else?"
        );
      }, 500);
      radioBoxRef.current.focus().scrollIntoView();
    } else if (
      (show && !organisationName) ||
      (show && !organizationNameValidation)
    ) {
      //
      let errorMsg = "Enter valid organisation";
      if (!organisationName) {
        errorMsg = "Please enter organisation name";
      }
      //
      setTimeout(() => {
        return alert(errorMsg); ///Change//
      }, 500);
      organisationRef.current.focus().scrollIntoView();
      setOrganizationNameValidation(false);
      //
    } else if ((show && !requesterName) || (show && !requesterNameValidation)) {
      let errorMsg = "Enter valid Requester Name";
      if (!requesterName) {
        errorMsg = "Please enter requester name";
      }
      setTimeout(() => {
        return alert(errorMsg);
      }, 500);
      requesterRef.current.focus().scrollIntoView();
      setRequesterNameValidation(false);
      //
    } else if (!fname || !fnameValidation) {
      let errorMsg = "Invalid First First Name";
      if (!fname) {
        errorMsg = "Please enter first name";
      }
      setTimeout(() => {
        alert(errorMsg);
      }, 500);
      fnameRef.current.focus().scrollIntoView();
    } else if (!lname || !lnameValidation) {
      let errorMsg = "Invalid Last Name";
      if (!lname) {
        errorMsg = "Please enter last name";
      }
      setTimeout(() => {
        return alert(errorMsg);
      }, 500);
      lnameRef.current.focus().scrollIntoView();
      setLnameValidation(false);
    } else if (!email || !emailValidation) {
      let errorMsg = "Invalid Email";
      if (!email) {
        errorMsg = "Please enter email";
      }
      setTimeout(() => {
        return alert(errorMsg);
      }, 500);
      emailRef.current.focus().scrollIntoView();
      setEmailValidation(false);
    } else if (!phone || phone.length !== 10 || !phoneValidation) {
      let errorMsg = "Invalid Phone No.";
      if (!phone) {
        errorMsg = "Please enter phone no.";
      }
      setTimeout(() => {
        return alert(errorMsg);
      }, 500);
      phoneRef.current.focus().scrollIntoView();
      setPhoneValidation(false);
    } else if (!currentLocation || !currentLocationValidation) {
      setTimeout(() => {
        return alert("Please Enter Current Location");
      }, 500);
      locationRef.current.focus().scrollIntoView();
      setCurrentLocationValidation(false);
    } else if (!selectedState) {
      setTimeout(() => {
        return alert("Please select state");
      }, 500);
      stateRef.current.focus().scrollIntoView();
      setStateValidation(true);
    } else if (!selectedCity) {
      setTimeout(() => {
        return alert("Please select City");
      }, 500);
      cityRef.current.focus().scrollIntoView();
      setCityValidation(true);
    } else if (data.length === 0) {
      setTimeout(() => {
        return alert("Please Select Language");
      }, 500);
      languageRef.current.focus().scrollIntoView();
      setSelectedLanguageValidation(true);
    } else if (skill.length === 0) {
      setTimeout(() => {
        return alert("Please select Skill");
      }, 500);
      skillsRef.current.focus().scrollIntoView();
      setSelectedSkillValidation(true);
    } else if (!agreement) {
      setTimeout(() => {
        return alert("Please select Agreement");
      }, 500);
      checkBoxRef.current.focus().scrollIntoView();
      // setCheckBOxValidation(false);
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
    name === "fname" && fname && setFnameValidation(/^[a-z-]+$/i.test(value));
    name === "lname" && lname && setLnameValidation(/^[a-z-]+$/i.test(value));
    name === "email" &&
      email &&
      setEmailValidation(
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/i.test(value)
      );
    name === "phone" && phone && setPhoneValidation(/^[0-9]{10}$/i.test(value));
    name === "organisationName" &&
      organisationName &&
      setOrganizationNameValidation(/^[a-z-]+$/i.test(value));
    name === "requesterName" &&
      requesterName &&
      setRequesterNameValidation(/^[a-z-]+$/i.test(value));
    name === "currentLocation" &&
      currentLocation &&
      setCurrentLocationValidation(
        /^[A-Z0-9 _]*[A-Z0-9][A-Z0-9 _]*$/i.test(value)
      );
  };

  const handleAgreement = () => {
    setAgreement(!agreement);
    setCheckBOxValidation(true);
  };
  // console.log({ agreement });

  const [UploadResume, setUploadResume] = useState("");

  const handleResumeOnchangeHandler = (e) => {
    setUploadResume(e.target.value);
  };

  const emptySelectedLanguage = () => {
    setSelectedLanguage("");
  };

  // console.log({ UploadResume: UploadResume?.split("\\").splice(-1) });
  return (
    <div className="main_container">
      {/* ////////////////////////////////////////////////////////////////////////////// */}
      <NavBar />
      <div className="main-heading">
        <div className="form-container">
          <h6 className="mb-3">Please enter your information</h6>
          <p>
            <span className="required_fields">*</span>Required fields
          </p>
          <h6 className="mt-3">
            Are you applying on behalf of some one else?
            <span className="required_fields">*</span>
          </h6>
          <Form>
            {["radio"].map((type) => (
              <div key={`reverse-${type}`} className="mb-3">
                <Form.Check
                  // className={`${!condition ? "radioBox_style" : ""}`}
                  className={`${!radioBoxValidation ? "ouline_style" : ""}`}
                  onClick={() => {
                    setShow(true);
                    setCondition(true);
                    setRadioBoxValidation(true);
                  }}
                  label="yes"
                  name="group1"
                  type={type}
                  id={`reverse-${type}-2`}
                  ref={radioBoxRef}
                />
                <Form.Check
                  className={`${!radioBoxValidation ? "ouline_style" : ""}`}
                  onClick={() => {
                    setShow(false);
                    setCondition(true);
                    setRadioBoxValidation(true);
                  }}
                  label="no"
                  name="group1"
                  type={type}
                  id={`reverse-${type}-1`}
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
                  <h6>
                    Organisation Name<span className="required_fields">*</span>
                  </h6>
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
                  ref={organisationRef}
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
                  <h6>
                    Requester Name<span className="required_fields">*</span>
                  </h6>
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
                  ref={requesterRef}
                />
              </Form.Group>
            </Form>
          ) : null}
          {/* onChange={getInputData} */}
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>
                <h6>
                  First Name<span className="required_fields">*</span>
                </h6>
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
                <h6>
                  Last Name<span className="required_fields">*</span>
                </h6>
              </Form.Label>
              <Form.Control
                name="lname"
                className={`${!lnameValidation ? "ouline_style" : ""}`}
                value={lname}
                onChange={(e) => validationFunction("lname", e.target.value)}
                type="email"
                placeholder="Enter Last Name"
                ref={lnameRef}
              />
            </Form.Group>
          </Form>

          <Form>
            {/* onChange={getInputData} */}
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>
                <h6>
                  Email<span className="required_fields">*</span>
                </h6>
              </Form.Label>
              <Form.Control
                name="email"
                className={`${!emailValidation ? "ouline_style" : ""}`}
                value={email}
                onChange={(e) => validationFunction("email", e.target.value)}
                type="email"
                placeholder="Enter Email"
                ref={emailRef}
              />
            </Form.Group>
          </Form>

          <Form>
            {/* onChange={getInputData} */}
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>
                <h6>
                  Phone Number<span className="required_fields">*</span>
                </h6>
              </Form.Label>
              <Form.Control
                name="phone"
                className={`${!phoneValidation ? "ouline_style" : ""}`}
                value={phone}
                onChange={(e) => validationFunction("phone", e.target.value)}
                type="phone"
                placeholder="Enter Phone No"
                ref={phoneRef}
              />
            </Form.Group>
          </Form>

          <>
            <Form.Label>
              <h6>
                Current Location<span className="required_fields">*</span>
              </h6>
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
                ref={locationRef}
              />
            </InputGroup>

            {/* ...........Select State Drop Down............. */}
            <Form.Label>
              <h6>
                State<span className="required_fields">*</span>
              </h6>
            </Form.Label>
            <select
              ref={stateRef}
              className={`form-control ${
                stateValidation ? "ouline_style" : ""
              }`}
              onChange={(e) => {
                handleState(e.target.value);
              }}
            >
              <option value="0" style={{ display: "none" }}>
                Select State
              </option>
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

            <Form.Label className="mt-3" style={{ marginTop: "5px" }}>
              <h6>
                City<span className="required_fields mt-3">*</span>
              </h6>
            </Form.Label>

            <select
              ref={cityRef}
              // value={}
              className={`form-control ${cityValidation ? "ouline_style" : ""}`}
              onChange={(e) => {
                handleCity(e.target.value);
              }}
            >
              <option value="">Select City</option>
              {city && city !== undefined
                ? city.map((statobj, index) => {
                    return (
                      <option key={statobj.id} value={statobj.name}>
                        {statobj.name}
                      </option>
                    );
                  })
                : "No City"}
            </select>

            <Form.Label className="mt-3" style={{ marginTop: "5px" }}>
              <h6>
                Language <Form.Text muted>(Select all that apply)</Form.Text>
                <span className="required_fields">*</span>
              </h6>
            </Form.Label>
            <select
              ref={languageRef}
              value={selectedLanguage}
              className={`form-control ${
                selectedLanguageValidation ? "ouline_style" : ""
              }`}
              defaultValue={"Please Select Value"}
              onChange={handleLanguageChange}
              name=""
              id=""
            >
              <option style={{ display: "none" }} value="">
                Please Select Language
              </option>
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
                setSelectedLanguage={setSelectedLanguage}
                setProficiency={setProficiency}
                proficiency={proficiency}
                handleSelectLanguage={handleSelectLanguage}
                emptySelectedLanguage={emptySelectedLanguage}
                selectedLanguage={selectedLanguage}
              />
            )}

            <Form.Label className="mt-3" style={{ marginTop: "8px" }}>
              <h6>
                Skills <Form.Text muted>(Select all that apply)</Form.Text>
                <span className="required_fields">*</span>
              </h6>
            </Form.Label>
            <select
              ref={skillsRef}
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
            <Form.Label className="mt-3" style={{ marginTop: "8px" }}>
              <h6>Mobility</h6>
              <Form.Text muted>
                Do you have access to reliable transportation?
              </Form.Text>
            </Form.Label>
            <select name="" id="" className="form-control">
              <option value="" style={{ display: "none" }}>
                Select Mobility
              </option>
              <option>Yes</option>
              <option>No</option>
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
              <h5>Resume Upload (*.pdf,*.doc)</h5>
              <input
                onChange={(e) => handleResumeOnchangeHandler(e)}
                type="file"
                id="files"
                class="hidden"
                accept=".pdf,.doc"
                style={{ display: "none" }}
              />
              <label for="files" className="uploadButton">
                Upload File
              </label>
            </div>
            {UploadResume && (
              <div style={{ display: "flex" }}>
                <div className="form-control">
                  {UploadResume?.split("\\").splice(-1)[0]}
                </div>
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
              className={`form-control agreementBox ${
                !checkBOxValidation ? "ouline_style" : ""
              }`}
            >
              <Form.Check
                onClick={handleAgreement}
                aria-label="option 1"
                ref={checkBoxRef}
              />
              <p>
                I agree to share above personal information in compliance with
                the
                <a href="/">
                  {" "}
                  data and privacy policy
                  <span className="required_fields">*</span>
                </a>
              </p>
            </div>
            <div className="btn_container mt-3">
              {spinner && <Spinner className="spinner_1" />}
              <Button
                disabled={spinner}
                onClick={handleSubmit}
                variant="primary"
                type="submit"
                style={{
                  width: "31vh",
                  justifySelf: "center",
                  alignSelf: "center",
                  marginTop: "15px",
                  marginBottom: "10px",
                }}
              >
                Submit Profile
              </Button>
            </div>
          </>
        </div>
      </div>
    </div>
  );
};

export default Home;
