import { useRef, useState } from "react";
import axios from "axios";
import "../../assets/login styling/login.css";
import { Link } from "react-router-dom";
import LandingPageNav from "../landing page/navbar";

const Register = () => {
  const userRef = useRef();
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const [email, setEmail] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/auth/register/", {
        username: user,
        email: email,
        password: pwd,
        confirm_password: confirmPwd,
      });
      setSuccess(true);
    } catch (error) {
      setErrMsg("Registration Failed");
    }
  };

  return (
    <>
      <LandingPageNav />
      <div className="grid-container">
        <div className="image-section">{/* Your image content here */}</div>
        <div className="form-section">
          {success ? (
            <section className="login-section">
              <h1>Registration Successful!</h1>
              <br />
              <p>
                <Link to="/">Go to Home</Link>
              </p>
            </section>
          ) : (
            <section className="login-section">
              <p
                className={errMsg ? "errmsg" : "offscreen"}
                aria-live="assertive"
              >
                {errMsg}
              </p>
              <h1 className="text-success-700 text-4xl text-capitalize relief-h1">
                SignUp!
              </h1>
              <form className="login-form" onSubmit={handleRegisterSubmit}>
                <input
                  type="text"
                  id="username"
                  ref={userRef}
                  autoComplete="off"
                  placeholder="Username"
                  onChange={(e) => setUser(e.target.value)}
                  value={user}
                  required
                />
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                />
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  onChange={(e) => setPwd(e.target.value)}
                  value={pwd}
                  required
                />
                <input
                  type="password"
                  id="confirmPassword"
                  placeholder="Confirm Password"
                  onChange={(e) => setConfirmPwd(e.target.value)}
                  value={confirmPwd}
                  required
                />
                <button className="signup-btn">Register</button>
              </form>
              <p>
                Already have an account?
                <span className="line">
                  <h1 className="relief-h1">
                    <Link to="/login">Sign In</Link>
                  </h1>
                </span>
              </p>
            </section>
          )}
        </div>
      </div>
    </>
  );
};

export default Register;
