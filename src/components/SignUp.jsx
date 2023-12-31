import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handlePasswordFormSubmit = (event) => {
    // 비밀번호와 비밀번호 확인이 일치하는지 확인합니다.
    const passwordsMatch = password === confirmPassword;

    setPasswordsMatch(passwordsMatch);
    if (passwordsMatch == true) {
      event.target.submit();
    } else {
      event.preventDefault();
    }
  };

  return (
    <header className="masthead">
      <section id="signup" className="mt-7">
        <hr className="sign-divider-light" />
        <h2 className="text-center mt-0 text-white">Sign Up</h2>
        <hr className="sign-divider-light mb-5" />

        <div className="row gx-4 gx-lg-5 justify-content-center mb-5">
          <div className="col-lg-4">
            <form id="signup" onSubmit={handlePasswordFormSubmit}>
              {/* ID input */}
              <div className="form-floating mb-3">
                <input
                  className="form-control"
                  id="name"
                  type="text"
                  placeholder="Enter your name..."
                  required
                />
                <label htmlFor="name">Full name</label>
                <div
                  className="invalid-feedback"
                  data-sb-feedback="name:required"
                >
                  A name is required.
                </div>
              </div>

              {/* EMAIL input */}
              <div className="form-floating mb-3">
                <input
                  className="form-control"
                  id="email"
                  type="email"
                  placeholder="Enter your Email..."
                  required
                />
                <label htmlFor="email">Email address</label>
                <div
                  className="invalid-feedback"
                  data-sb-feedback="email:required"
                >
                  An email is required.
                </div>
                <div
                  className="invalid-feedback"
                  data-sb-feedback="email:email"
                >
                  Email is not valid.
                </div>
              </div>

              {/* ID input */}
              <div className="form-floating mb-3">
                <input
                  className="form-control"
                  id="id"
                  type="text"
                  placeholder="Enter your ID..."
                  required
                />
                <label htmlFor="id">ID</label>
                <div
                  className="invalid-feedback"
                  data-sb-feedback="id:required"
                >
                  An ID is required.
                </div>
              </div>

              {/* PASSWORD input */}
              <div className="form-floating mb-3">
                <input
                  className="form-control"
                  id="password"
                  type="password"
                  placeholder="Enter your password..."
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
                <label htmlFor="password">Password</label>
                <div
                  className="invalid-feedback"
                  data-sb-feedback="password:required"
                >
                  A password is required.
                </div>
              </div>

              {/* PASSWORD CONFIRM input */}
              <div className="form-floating mb-3">
                <input
                  className="form-control"
                  id="confirmPassword"
                  type="password"
                  placeholder="Enter your password again..."
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  required
                />
                <label htmlFor="confirmPassword">Password Check</label>
                <div
                  className="invalid-feedback"
                  data-sb-feedback="confirmPassword:required"
                >
                  A password is required.
                </div>
              </div>

              {!passwordsMatch && (
                <p className="text-white text-center">
                  비밀번호와 비밀번호 확인이 일치하지 않습니다.
                </p>
              )}

              {/* SUBMIT button */}
              <div className="d-grid">
                <button
                  className="btn btn-primary btn-xl"
                  id="submitButton"
                  type="submit"
                >
                  Sign Up !
                </button>
              </div>

            </form> <br/>
            <div className="text-center text-white">
              이미 계정이 있다면&nbsp;
              <Link className="text-center text-white" to="/signin">
              <i
                className="fa-solid fa-right-to-bracket"
                style={{ color: "#ffffff" }}
              ></i>
                &nbsp;로그인하기
              </Link>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default SignUp;
