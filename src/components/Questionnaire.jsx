import _ from 'lodash';
import { MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import React, { useState } from 'react';

import { addQuestionnaires, getQuestionnaires } from '../services/questionnaires';

const Questionnaire = () => {
  const [fname, setFname] = useState();
  const [lname, setLname] = useState();
  const [email, setEmail] = useState();
  const [city, setCity] = useState();
  const [countryState, setCountryState] = useState();
  const [zip, setZip] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
    e.target.className += ' was-validated';
    if (
      !_.isUndefined(fname) &&
      !_.isUndefined(lname) &&
      !_.isUndefined(email) &&
      !_.isUndefined(city) &&
      !_.isUndefined(countryState) &&
      !_.isUndefined(zip)
    ) {
      addQuestionnaires({
        fname,
        lname,
        email,
        city,
        countryState: countryState,
        zip,
      });
      console.debug('Questionnaires:', getQuestionnaires());
    }
  };

  return (
    <>
      <div>
        <form className="needs-validation" onSubmit={submitHandler} noValidate>
          <MDBRow>
            <MDBCol md="4" className="mb-3">
              <label htmlFor="defaultFormRegisterFirstNameEx" className="grey-text">
                First name
              </label>
              <input
                value={fname}
                name="fname"
                onChange={(e) => setFname(e.target.value)}
                type="text"
                id="defaultFormRegisterFirstNameEx"
                className="form-control"
                placeholder="First name"
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </MDBCol>
            <MDBCol md="4" className="mb-3">
              <label htmlFor="defaultFormRegisterLastNameEx2" className="grey-text">
                Last name
              </label>
              <input
                value={lname}
                name="lname"
                onChange={(e) => setLname(e.target.value)}
                type="text"
                id="defaultFormRegisterLastNameEx2"
                className="form-control"
                placeholder="Last name"
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </MDBCol>
            <MDBCol md="4" className="mb-3">
              <label htmlFor="defaultFormRegisterEmailEx3" className="grey-text">
                Email
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="defaultFormRegisterEmailEx3"
                className="form-control"
                name="email"
                placeholder="Your Email address"
                required
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md="4" className="mb-3">
              <label htmlFor="defaultFormRegisterCityEx4" className="grey-text">
                City
              </label>
              <input
                value={city}
                onChange={(e) => setCity(e.target.value)}
                type="text"
                id="defaultFormRegisterCityEx4"
                className="form-control"
                name="city"
                placeholder="City"
                required
              />
              <div className="invalid-feedback">Please provide a valid city.</div>
              <div className="valid-feedback">Looks good!</div>
            </MDBCol>
            <MDBCol md="4" className="mb-3">
              <label htmlFor="defaultFormRegisterStateEx4" className="grey-text">
                State
              </label>
              <input
                value={countryState}
                onChange={(e) => setCountryState(e.target.value)}
                type="text"
                id="defaultFormRegisterStateEx4"
                className="form-control"
                name="state"
                placeholder="State"
                required
              />
              <div className="invalid-feedback">Please provide a valid state.</div>
              <div className="valid-feedback">Looks good!</div>
            </MDBCol>
            <MDBCol md="4" className="mb-3">
              <label htmlFor="defaultFormRegisterZipEx4" className="grey-text">
                Zip
              </label>
              <input
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                type="text"
                id="defaultFormRegisterZipEx4"
                className="form-control"
                name="zip"
                placeholder="Zip"
                required
              />
              <div className="invalid-feedback">Please provide a valid zip.</div>
              <div className="valid-feedback">Looks good!</div>
            </MDBCol>
          </MDBRow>
          <MDBCol md="4" className="mb-3">
            <div className="custom-control custom-checkbox pl-3">
              <input
                className="custom-control-input"
                type="checkbox"
                value=""
                id="invalidCheck"
                required
              />
              <label className="custom-control-label" htmlFor="invalidCheck">
                Agree to terms and conditions
              </label>
              <div className="invalid-feedback">You must agree before submitting.</div>
            </div>
          </MDBCol>
          <MDBBtn color="primary" type="submit">
            Submit Form
          </MDBBtn>
        </form>
      </div>
    </>
  );
};

export default Questionnaire;
