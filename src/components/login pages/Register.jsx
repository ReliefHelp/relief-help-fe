import { useRef, useState, useEffect } from "react";
import "../../assets/login styling/login.css";
import { Link } from "react-router-dom";

const Register = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const [email, setEmail] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, confirmPwd, email]);

  const handleRegisterSubmit = (e) => {
    e.preventDefault();

    // Simulating registration success
    if (user && pwd && pwd === confirmPwd && email) {
      setUser("");
      setPwd("");
      setConfirmPwd("");
      setEmail("");
      setSuccess(true);
    } else {
      setErrMsg("Registration Failed");
      errRef.current.focus();
    }
  };

  return (
    <div className="grid-container">
      <div className="image-section">{/* Your image content here */}</div>
      <div className="form-section">
        {success ? (
          <section>
            <h1>Registration Successful!</h1>
            <br />
            <p>
              <a href="#">Go to Home</a>
            </p>
          </section>
        ) : (
          <section>
            <p
              ref={errRef}
              className={errMsg ? "errmsg" : "offscreen"}
              aria-live="assertive"
            >
              {errMsg}
            </p>
            <h1>ReliefHelp!</h1>
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

              <button>Register</button>
            </form>
            <p>
              Already have an account?
              <br />
              <span className="line">
                <Link to="/login">Sign In</Link>
              </span>
            </p>
          </section>
        )}
      </div>
    </div>
  );
};

export default Register;
