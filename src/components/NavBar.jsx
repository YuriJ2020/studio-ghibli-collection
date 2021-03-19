import _ from 'lodash';
import { BrowserRouter as Router } from 'react-router-dom';
import React, { useState } from 'react';
import TotoroLogo from '../assets/totoro-logo2.png';

import {
  MDBCollapse,
  MDBContainer,
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
} from 'mdbreact';

import { getCategories } from '../services/categories';
// import CustomSwitch from '../switch';

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isNavbarFixed, setNavbarFixed] = useState(false);
  const toggleCollapse = () => setIsOpen(!isOpen);
  const { children } = props;

  const onClickFixNavbar = (e) => {
    e.preventDefault();
    setNavbarFixed(!isNavbarFixed);
  };

  return (
    <>
      <Router>
        <MDBNavbar color="aqua-gradient" dark expand="md" fixed={isNavbarFixed ? 'top' : undefined}>
          <MDBNavLink to="/">
            <MDBNavbarBrand>
              <img src={TotoroLogo} height="60" alt="" loading="lazy" />
              <strong className="white-text">Studio Ghibli Collection</strong>
            </MDBNavbarBrand>
          </MDBNavLink>
          <MDBNavbarToggler onClick={toggleCollapse} />
          <MDBCollapse id="navbarCollapse" isOpen={isOpen} navbar>
            <MDBNavbarNav left>
              <MDBNavItem>
                <MDBNavLink to="/?page=1">All Movies</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    <span className="mr-2">Categories</span>
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    {_.map(getCategories(), (c) => (
                      <MDBDropdownItem key={c._id} href={`/category/${c._id}?page=1`} className="text-center">
                        {c.name}
                      </MDBDropdownItem>
                    ))}
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
              <MDBNavItem active={isNavbarFixed}>
                <MDBNavLink to="#" onClick={onClickFixNavbar}>
                  Lock Navbar
                </MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right className="mr-5">
              <MDBNavItem>
                <MDBNavLink to="/questionnaire">Inquiry</MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
        <MDBContainer style={{ paddingTop: isNavbarFixed ? 102 : 0 }}>
          {children}
        </MDBContainer>
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
