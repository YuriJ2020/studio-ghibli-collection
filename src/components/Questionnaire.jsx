import _ from "lodash";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBMask,
  MDBView,
} from "mdbreact";
import React, { useState } from "react";
import styled from "styled-components";

import ChihiroBG from "../assets/chihirobg.png";

import {
  addQuestionnaires,
  getQuestionnaires,
} from "../services/questionnaires";

const ImgS = styled.div`
  background: url(${ChihiroBG});
  min-height: 90vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: bottom;
`;

const MDBBtnS = styled(MDBBtn)`
  background-color: #009999 !important;
`;

const Questionnaire = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [countryState, setCountryState] = useState("");
  const [zip, setZip] = useState("");
  const [isAgreed, setIsAgreed] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    e.target.className += " was-validated";
    if (
      !_.isUndefined(fname) &&
      !_.isUndefined(lname) &&
      !_.isUndefined(email) &&
      !_.isUndefined(city) &&
      !_.isUndefined(countryState) &&
      !_.isUndefined(zip) &&
      isAgreed
    ) {
      addQuestionnaires({
        fname,
        lname,
        email,
        city,
        countryState: countryState,
        zip,
        isAgreed,
      });
      console.debug("Questionnaires:", getQuestionnaires());
    }
  };

  return (
    <>
      <div>
        {/* style={{ backgroundColor: "#E0E0E0" }} */}
        <MDBContainer fluid className="p-0 text-white">
          <MDBView>
            <ImgS>
              {/* <ImgS src={ChihiroBG} alt="train" /> */}
              <MDBMask className="flex-center" overlay="stylish-strong">
                <form
                  className="needs-validation m-5"
                  onSubmit={submitHandler}
                  noValidate
                >
                  <h1 className="py-3">Inqury</h1>
                  <MDBRow>
                    <MDBCol md="6" className="mb-3">
                      <label
                        htmlFor="defaultFormRegisterFirstNameEx"
                        className="white-text"
                      >
                        First name
                      </label>
                      <input
                        required
                        className="form-control"
                        id="defaultFormRegisterFirstNameEx"
                        name="fname"
                        onChange={(e) => setFname(e.target.value)}
                        placeholder="First name"
                        type="text"
                        value={fname}
                      />
                      <div className="valid-feedback">Looks good!</div>
                    </MDBCol>

                    <MDBCol md="6" className="mb-3">
                      <label
                        htmlFor="defaultFormRegisterLastNameEx2"
                        className="white-text"
                      >
                        Last name
                      </label>
                      <input
                        required
                        className="form-control"
                        id="defaultFormRegisterLastNameEx2"
                        name="lname"
                        onChange={(e) => setLname(e.target.value)}
                        placeholder="Last name"
                        type="text"
                        value={lname}
                      />
                      <div className="valid-feedback">Looks good!</div>
                    </MDBCol>

                    <MDBCol md="12" className="mb-3">
                      <label
                        htmlFor="defaultFormRegisterEmailEx3"
                        className="white-text"
                      >
                        Email
                      </label>
                      <input
                        required
                        className="form-control"
                        id="defaultFormRegisterEmailEx3"
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your Email address"
                        type="email"
                        value={email}
                      />
                      <small id="emailHelp" className="form-text text-muted">
                        We'll never share your email with anyone else.
                      </small>
                    </MDBCol>
                  </MDBRow>

                  <MDBRow>
                    <MDBCol md="4" className="mb-3">
                      <label
                        htmlFor="defaultFormRegisterCityEx4"
                        className="white-text"
                      >
                        City
                      </label>
                      <input
                        required
                        className="form-control"
                        id="defaultFormRegisterCityEx4"
                        name="city"
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="City"
                        type="text"
                        value={city}
                      />
                      <div className="invalid-feedback">
                        Please provide a valid city.
                      </div>
                      <div className="valid-feedback">Looks good!</div>
                    </MDBCol>

                    <MDBCol md="4" className="mb-3">
                      <label
                        htmlFor="defaultFormRegisterStateEx4"
                        className="white-text"
                      >
                        State
                      </label>
                      <input
                        required
                        className="form-control"
                        id="defaultFormRegisterStateEx4"
                        name="state"
                        onChange={(e) => setCountryState(e.target.value)}
                        placeholder="State"
                        type="text"
                        value={countryState}
                      />
                      <div className="invalid-feedback">
                        Please provide a valid state.
                      </div>
                      <div className="valid-feedback">Looks good!</div>
                    </MDBCol>

                    <MDBCol md="4" className="mb-3">
                      <label
                        htmlFor="defaultFormRegisterZipEx4"
                        className="white-text"
                      >
                        Post Code
                      </label>
                      <input
                        required
                        className="form-control"
                        id="defaultFormRegisterZipEx4"
                        name="zip"
                        onChange={(e) => setZip(e.target.value)}
                        placeholder="Post"
                        type="text"
                        value={zip}
                      />
                      <div className="invalid-feedback">
                        Please provide a valid zip.
                      </div>
                      <div className="valid-feedback">Looks good!</div>
                    </MDBCol>
                  </MDBRow>

                  <MDBCol md="12" className="mb-3">
                    <div className="custom-control custom-checkbox pl-3">
                      <input
                        required
                        checked={isAgreed}
                        className="custom-control-input"
                        id="invalidCheck"
                        onChange={(e) => setIsAgreed(!isAgreed)}
                        type="checkbox"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="invalidCheck"
                      >
                        Agree to terms and conditions
                      </label>
                      <div className="invalid-feedback">
                        You must agree before submitting.
                      </div>
                    </div>
                  </MDBCol>

                  <MDBBtnS type="submit">
                    Submit Form
                    <MDBIcon far icon="paper-plane" className="ml-1" />
                  </MDBBtnS>
                </form>
              </MDBMask>
            </ImgS>
          </MDBView>
        </MDBContainer>
      </div>
    </>
  );
};

export default Questionnaire;
