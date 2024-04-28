import React from "react";
import background from "../pictures/dashboard.jpg";
import { useState } from "react";
// import { login } from "../../Redux/apiCalls";
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
import { toast } from "react-toastify";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  // const dispatch = useDispatch();
  // const { isFetching } = useSelector((state) => state.user);
  // const navigate = useNavigate();
  // const LoginUser = async (e) => {
  //   e.preventDefault();
  //   const auth = await login(dispatch, { email, password });
  //   console.log(auth);
  //   if (auth) {
  //     // error come in auth then response and then data
  //     toast.error(auth.response.data);
  //   } else {
  //     toast.success("Login Successfully...!!!");
  //   }
  //   navigate("/");
  // };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <MDBContainer className="my-5 d-flex justify-content-center align-items-center">
        <MDBCard>
          <MDBRow className="g-0">
            <MDBCol md="6" className="image">
              <MDBCardImage
                src={background}
                alt="login form"
                className="rounded-start w-100 h-100"
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
                  <span className="h1 fw-bold mb-0">eComWebsite</span>
                </div>

                <h5
                  className="fw-normal my-4 pb-3"
                  style={{ letterSpacing: "1px" }}
                >
                  Sign into your account
                </h5>

                <MDBInput
                  onChange={(e) => setemail(e.target.value)}
                  wrapperClass="mb-4"
                  label="Email address"
                  id="formControlLg"
                  type="email"
                  size="lg"
                />
                <MDBInput
                  onChange={(e) => setpassword(e.target.value)}
                  wrapperClass="mb-4"
                  label="Password"
                  id="formControlLg"
                  type="password"
                  size="lg"
                />

                <MDBBtn
                  type="submit"
                  // onClick={LoginUser}
                  // disabled={isFetching}
                  className="mb-4 px-5"
                  color="dark"
                  size="lg"
                >
                  Login
                </MDBBtn>
                <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                  Don't have an account?{" "}
                  <a href="/signup" style={{ color: "dark" }}>
                    Signup
                  </a>
                </p>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </MDBContainer>
    </div>
  );
};

//gggggggg

export default Login;
