import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "../../slices/LoginSlice";
import { useDispatch } from "react-redux/es/exports";
import { MDBBtn, MDBNavbar, MDBContainer, MDBIcon, MDBNavbarNav, MDBNavbarItem, MDBNavbarToggler, MDBNavbarBrand, MDBCollapse } from "mdb-react-ui-kit";

function NavBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout_button_click = () => {
    dispatch(logout());
    navigate("/home");
  };
  const [showNavColor, setShowNavColor] = useState(false);
  return (
    <>
      <MDBNavbar expand="lg" dark bgColor="primary">
        <MDBContainer fluid>
          <MDBNavbarBrand href="#">My Test App</MDBNavbarBrand>
          <MDBNavbarToggler type="button" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation" onClick={() => setShowNavColor(!showNavColor)}>
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>
          <MDBCollapse show={showNavColor} navbar>
            <MDBNavbarNav right fullWidth={false} className="mb-2 mb-lg-0">
              <MDBNavbarItem>
                <NavLink to="/home">Home</NavLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <NavLink to="/fetchcontacts">Fetch Contacts</NavLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <NavLink to="/sendmessage">Send Message</NavLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <NavLink to="/showreports">Reports</NavLink>
              </MDBNavbarItem>
              <MDBNavbarItem onClick={logout_button_click}>
                <MDBBtn className="ml-auto">
                  <MDBIcon fas icon="sign-out-alt" />
                </MDBBtn>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}

export default NavBar;
