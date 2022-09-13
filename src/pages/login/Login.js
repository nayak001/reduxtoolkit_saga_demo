import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login_init } from "../../slices/LoginSlice";
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBModal, MDBModalDialog, MDBModalContent, MDBModalHeader, MDBModalTitle, MDBModalBody, MDBModalFooter } from "mdb-react-ui-kit";

function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Show/ Hide Modal
  const [modalMessage, setModalMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const toggleShowModal = () => setShowModal(!showModal);

  const login_button_click = () => {
    console.log(email, "-", password);
    if (!email) {
      setModalMessage("Please enter a valid emailid");
      toggleShowModal();
    } else if (!password) {
      setModalMessage("Please enter a valid password");
      toggleShowModal();
    } else {
      setModalMessage("");
      const user = {
        userid: email,
        password,
        usertype: "admin",
      };
      dispatch(login_init(user));
    }
  };
  return (
    <>
      <div className="login_container">
        <MDBContainer fluid className="p-3 my-5 h-custom">
          <MDBRow>
            <MDBCol col="10" md="6">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid" alt="" />
            </MDBCol>

            <MDBCol col="4" md="6">
              <div className="d-flex flex-row align-items-center justify-content-center">
                <p className="lead fw-normal mb-0 me-3">Sign in with</p>

                <MDBBtn floating size="md" tag="a" className="me-2">
                  <MDBIcon fab icon="google" />
                </MDBBtn>
              </div>

              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0">Or</p>
              </div>

              <MDBInput wrapperClass="mb-4" label="Email address" id="formControlLg" type="email" size="lg" value={email} onChange={(e) => setEmail(e.target.value)} />
              <MDBInput wrapperClass="mb-4" label="Password" id="formControlLg" type="password" size="lg" value={password} onChange={(e) => setPassword(e.target.value)} />

              <div className="text-center text-md-start mt-4 pt-2">
                <MDBBtn className="mb-0 px-5" size="lg" onClick={login_button_click}>
                  Login
                </MDBBtn>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>

      {/* Modal starts from Here */}
      <MDBModal animationDirection="right" show={showModal} tabIndex="-1" setShow={setShowModal}>
        <MDBModalDialog position="top-right" side>
          <MDBModalContent>
            <MDBModalBody>
              <div className="row">
                <div className="col-3 text-center">
                  <i className="fa fa-info-circle fa-4x text-info"></i>
                </div>
                <div className="col-9">
                  <p>
                    <br />
                    {modalMessage}
                  </p>
                </div>
              </div>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn outline color="info" onClick={toggleShowModal}>
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}

export default Login;
