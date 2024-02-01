import { useRef, useState, useEffect } from "react";
import "../../assets/login styling/login.css";

const Login = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulating login success
    if (user === "example" && pwd === "password") {
      setUser("");
      setPwd("");
      setSuccess(true);
    } else {
      setErrMsg("Login Failed");
      errRef.current.focus();
    }
  };

  return (
    <div className="grid-container">
      <div className="image-section">{/* Your image content here */}</div>
      <div className="form-section">
        {success ? (
          <section>
            <h1>You are logged in!</h1>
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
            <h1>ReliefHelp</h1>
            <form onSubmit={handleSubmit}>
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
                type="password"
                id="password"
                placeholder="Password"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
              />
              <button>Sign In</button>
            </form>
            <p>
              Need an Account?
              <br />
              <span className="line">
                {/* put router link here */}
                <a href="#">Sign Up</a>
              </span>
            </p>
          </section>
        )}
      </div>
    </div>
  );
};

export default Login;