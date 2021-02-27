import _ from 'lodash';
import { BrowserRouter as Router } from 'react-router-dom';
import React, { useState } from 'react';
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
} from 'mdbreact';

import { getCategories } from '../services/categories';

export default () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleCollapse = () => setIsOpen(!isOpen);
  return (
    <Router>
      <MDBNavbar color="indigo" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">Studio Ghibli</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={toggleCollapse} />
        <MDBCollapse id="navbarCollapse" isOpen={isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink to="/">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className="mr-2">Categories</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  {_.map(getCategories(), (c) => (
                    <MDBDropdownItem href={`/category/${c._id}`}>{c.name}</MDBDropdownItem>
                  ))}
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem active>
              <MDBNavLink to="/questionnaire">Questionnaire</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </Router>
  );
};
