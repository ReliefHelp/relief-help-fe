import { useRef, useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import LandingPageNav from "../landing page/navbar";

const Login = () => {
  const emailRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [email, pwd]);

  useEffect(() => {
    const fetchUsername = async () => {
      try {
        const response = await axios.get(
          "https://reliefhelp.onrender.com/auth/api/current-user"
        );
        setUsername(response.data.username);
      } catch (error) {
        console.error("Error retrieving username:", error);
      }
    };

    if (success) {
      fetchUsername();
    }
  }, [success]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://reliefhelp.onrender.com/auth/login/", {
        email: email,
        password: pwd,
      });

      // Check the response status and handle accordingly
      if (response.status === 200) {
        setEmail("");
        setPwd("");
        setSuccess(true);
        setUsername(response.data.username); // Add this line to set the username immediately
      } else {
        setErrMsg("Login Failed");
        errRef.current.focus();
      }
    } catch (error) {
      // Handle error response
      setErrMsg("Login Failed");
      errRef.current.focus();
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
              <h1>You are logged in, {username}!</h1>
              <br />
              <p>
                <Link to="/">Go to Home</Link>
              </p>
            </section>
          ) : (
            <section className="login-section">
              <p
                ref={errRef}
                className={errMsg ? "errmsg" : "offscreen"}
                aria-live="assertive"
              >
                {errMsg}
              </p>
              <h1 className="text-success-700 text-4xl text-capitalize relief-h2">
                SignIn
              </h1>
              <form className="login-form" onSubmit={handleSubmit}>
                <input
                  type="email"
                  id="email"
                  ref={emailRef}
                  autoComplete="off"
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
                <button className="signup-btn">Proceed</button>
              </form>
              <p>
                Need an Account?{" "}
                <span className="line">
                  <h1 className="relief-h1">
                    <Link to="/register"> Sign Up</Link>
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

export default Login;
