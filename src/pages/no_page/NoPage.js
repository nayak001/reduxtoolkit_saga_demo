import React from "react";
import { NavLink } from "react-router-dom";
import { MDBBtn } from "mdb-react-ui-kit";

function NoPage() {
  return (
    <div>
      404
      <br />
      Sorry, the page you are looking for is currently unavailable. Please try again later.
      <br />
      <MDBBtn className="ml-auto">
        <NavLink to="/">Home</NavLink>
      </MDBBtn>
    </div>
  );
}

export default NoPage;
