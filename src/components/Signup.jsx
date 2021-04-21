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

import { addSignup, getSignup } from "../services/signup";

const ImgS = styled.div`
  background: url(${ChihiroBG});
  min-height: 90vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: bottom;
`;

const Signup = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [submissionMsg, setSubmissionMsg] = useState("");
  const [isAgreed, setIsAgreed] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    e.target.className += " was-validated";
    if (
      !_.isUndefined(fname) &&
      !_.isEmpty(fname) &&
      !_.isUndefined(lname) &&
      !_.isEmpty(lname) &&
      !_.isUndefined(email) &&
      !_.isEmpty(email) &&
      isAgreed
    ) {
      addSignup({
        fname,
        lname,
        email,
        isAgreed,
      });
      console.debug("Signup:", getSignup());
      setSubmissionMsg("Sign-Up completed! Thanks ");
    }
  };

  return (
    <>
      <div>
        <MDBContainer fluid className="p-0 text-white">
          <MDBView>
            <ImgS>
              <MDBMask className="flex-center" overlay="stylish-strong">
                <form
                  className="needs-validation m-5"
                  onSubmit={submitHandler}
                  noValidate
                >
                  <h1 className="py-3">Sign Up Form</h1>
                  <h5 className="py-4">
                    We will let you know about new movie releases.
                  </h5>
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
                      <div className="valid-feedback cyan-text font-weight-bold">
                        Looks good!
                      </div>
                      <div className="invalid-feedback font-weight-bold">
                        Please fill in your first name.
                      </div>
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
                      <div className="valid-feedback cyan-text font-weight-bold">
                        Looks good!
                      </div>
                      <div className="invalid-feedback font-weight-bold">
                        Please fill in your last name.
                      </div>
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
                      <div className="invalid-feedback font-weight-bold">
                        Please fill in your email address.
                      </div>
                    </MDBCol>
                  </MDBRow>

                  <MDBCol md="12" className="mb-3">
                    <div className="custom-control custom-checkbox pl-3">
                      <input
                        required
                        checked={isAgreed}
                        className="custom-control-input"
                        id="invalidCheck"
                        onChange={() => setIsAgreed(!isAgreed)}
                        type="checkbox"
                      />
                      <label
                        className="custom-control-label cyan-text font-weight-bold"
                        htmlFor="invalidCheck"
                      >
                        Agree to terms and conditions
                      </label>
                      <div className="invalid-feedback font-weight-bold">
                        You must agree before submitting.
                      </div>
                    </div>
                  </MDBCol>

                  <MDBBtn type="submit">
                    Submit Form
                    <MDBIcon far icon="paper-plane" className="ml-1" />
                  </MDBBtn>
                  <h3 className="py-3 orange-text font-weight-bold">
                    {submissionMsg}
                  </h3>
                </form>
              </MDBMask>
            </ImgS>
          </MDBView>
        </MDBContainer>
      </div>
    </>
  );
};

export default Signup;
