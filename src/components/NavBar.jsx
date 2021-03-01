import _ from "lodash";
import { BrowserRouter as Router } from "react-router-dom";
import React, { useState } from "react";
import TotoroLogo from "../assets/totoro-logo2.png";

import {
  MDBCollapse,
  MDBDropdown,
  MDBDropdownItem,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBNavItem,
  MDBNavLink,
} from "mdbreact";

import { getCategories } from "../services/categories";
// import CustomSwitch from '../switch';

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleCollapse = () => setIsOpen(!isOpen);
  const { children } = props;

  return (
    <>
      <Router>
        <MDBNavbar color="aqua-gradient" dark expand="md">
          <MDBNavLink to="/?page=1">
            <MDBNavbarBrand>
              <img src={TotoroLogo} height="60" alt="" loading="lazy" />
              <strong className="white-text">Studio Ghibli Collection</strong>
            </MDBNavbarBrand>
          </MDBNavLink>
          <MDBNavbarToggler onClick={toggleCollapse} />
          <MDBCollapse id="navbarCollapse" isOpen={isOpen} navbar>
            <MDBNavbarNav left>
              <MDBNavItem active>
                <MDBNavLink to="/?page=1">All Movies</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    <span className="mr-2">Categories</span>
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    {_.map(getCategories(), (c) => (
                      <MDBDropdownItem
                        key={c._id}
                        href={`/category/${c._id}?page=1`}
                      >
                        {c.name}
                      </MDBDropdownItem>
                    ))}
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right className="mr-5">
              <MDBNavItem active>
                <MDBNavLink to="/questionnaire">Inquiry</MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
        {children}
      </Router>
    </>
  );
};

const navBarWithSwitch = (CustomSwitch) => (
  <>
    <NavBar>
      <CustomSwitch />
    </NavBar>
  </>
);

export default navBarWithSwitch;
