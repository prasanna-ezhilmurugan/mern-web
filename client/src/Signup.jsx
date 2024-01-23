import React from "react";
import { useState } from "react";
import axios from "axios";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
} from "mdb-react-ui-kit";

function Signup() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [userId, setUserId] = useState("");

  function handleSubmit() {
    console.log({
      name: name,
      email: email,
      userId: userId,
      password: password,
    });
    axios
      .post("", { name, email, password })
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  }

  return (
    <div>
      <MDBContainer className="my-5">
        <MDBCard>
          <MDBRow className="g-0">
            <MDBCol md="6">
              <MDBCardImage
                src="./assets/login.png"
                alt="login form"
                className="rounded-start w-100"
              />
            </MDBCol>

            <MDBCol md="6">
              <MDBCardBody className="d-flex flex-column">
                <div className="d-flex flex-row mt-2">
                  <MDBIcon
                    fas
                    icon="cubes fa-3x me-3"
                    style={{ color: "#ff6219" }}
                  />
                  <span className="h1 fw-bold mb-0">Logo</span>
                </div>

                <h5
                  className="fw-normal my-4 pb-3"
                  style={{ letterSpacing: "1px" }}
                >
                  Create an Account
                </h5>

                <MDBInput
                  wrapperClass="mb-4"
                  label="Name"
                  id="formControlLg"
                  type="Name"
                  size="lg"
                  onChange={(event) => setName(event.target.value)}
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Create User Address"
                  id="formControlLg"
                  type="userId"
                  size="lg"
                  onChange={(event) => setUserId(event.target.value)}
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Email address"
                  id="formControlLg"
                  type="email"
                  size="lg"
                  onChange={(event) => setEmail(event.target.value)}
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Password"
                  id="formControlLg"
                  type="password"
                  size="lg"
                  onChange={(event) => setPassword(event.target.value)}
                />

                <MDBBtn
                  className="mb-4 px-5"
                  color="dark"
                  size="lg"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Register
                </MDBBtn>

                <div className="d-flex flex-row justify-content-start">
                  <a href="#!" className="small text-muted me-1">
                    Terms of use.
                  </a>
                  <a href="#!" className="small text-muted">
                    Privacy policy
                  </a>
                </div>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </MDBContainer>
    </div>
  );
}

export default Signup;
