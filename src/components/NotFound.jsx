import { MDBContainer, MDBNavLink } from "mdbreact";
import React from "react";
import styled from "styled-components";
import TotoroIcon from "../assets/totoro-icon.svg";

const H1 = styled.h1`
  font-size: 3.2rem;
  font-weight: bold;
  background: linear-gradient(to right, #1e9ff7, #08f6ab);
  -webkit-background-clip: text;
  color: transparent;
`;

const NotFound = () => {
  return (
    <MDBContainer className="text-center py-5">
      <img src={TotoroIcon} height="280" alt="icon" loading="lazy" />
      <H1 className="py-2">404</H1>

      <h2>Oh No! Page not found.</h2>
      <MDBNavLink to="/">Go to Home</MDBNavLink>
    </MDBContainer>
  );
};

export default NotFound;
