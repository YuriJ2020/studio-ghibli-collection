import _ from 'lodash';
import { MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import React, { useState } from 'react';

import { addQuestionnaires, getQuestionnaires } from '../services/questionnaires';

const Questionnaire = () => {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [countryState, setCountryState] = useState('');
  const [zip, setZip] = useState('');
  const [isAgreed, setIsAgreed] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    e.target.className += ' was-validated';
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

            <MDBCol md="4" className="mb-3">
              <label htmlFor="defaultFormRegisterLastNameEx2" className="grey-text">
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

            <MDBCol md="4" className="mb-3">
              <label htmlFor="defaultFormRegisterEmailEx3" className="grey-text">
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
              <label htmlFor="defaultFormRegisterCityEx4" className="grey-text">
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
              <div className="invalid-feedback">Please provide a valid city.</div>
              <div className="valid-feedback">Looks good!</div>
            </MDBCol>

            <MDBCol md="4" className="mb-3">
              <label htmlFor="defaultFormRegisterStateEx4" className="grey-text">
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
              <div className="invalid-feedback">Please provide a valid state.</div>
              <div className="valid-feedback">Looks good!</div>
            </MDBCol>

            <MDBCol md="4" className="mb-3">
              <label htmlFor="defaultFormRegisterZipEx4" className="grey-text">
                Zip
              </label>
              <input
                required
                className="form-control"
                id="defaultFormRegisterZipEx4"
                name="zip"
                onChange={(e) => setZip(e.target.value)}
                placeholder="Zip"
                type="text"
                value={zip}
              />
              <div className="invalid-feedback">Please provide a valid zip.</div>
              <div className="valid-feedback">Looks good!</div>
            </MDBCol>
          </MDBRow>

          <MDBCol md="4" className="mb-3">
            <div className="custom-control custom-checkbox pl-3">
              <input
                required
                checked={isAgreed}
                className="custom-control-input"
                id="invalidCheck"
                onChange={(e) => setIsAgreed(!isAgreed)}
                type="checkbox"
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
