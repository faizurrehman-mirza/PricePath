import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [useremail, setUseremail] = useState("");
  const [userpassword, setUserpassword] = useState("");
  const [registrationMessage, setRegistrationMessage] = useState("");
  const [registrationError, setRegistrationError] = useState("");
  const [error, setError] = useState({});
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    const userData = {
      username,
      email: useremail,
      password: userpassword,
    };

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/v1/register/",
        userData,
        setError({}),
        setSuccess(true),
      );
      console.log("response data =", response.data);
      console.log("registration successful");
    } catch (error) {
      setError(error.response.data);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="container ">
        <div className="row justify-content-center  ">
          <div className="col-md-6 bg-light-dark p-5 rounded">
            <h3 className="text-light text-center mb-5">Create an Account</h3>
            {registrationMessage && (
              <p className="text-success">{registrationMessage}</p>
            )}
            {registrationError && (
              <p className="text-danger">{registrationError}</p>
            )}
            <form onSubmit={handleRegister}>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Username"
                  value={username}
                  required
                  onChange={(e) => setUsername(e.target.value)}
                />
                <small>{error.username}</small>
              </div>

              <input
                type="email"
                className="form-control mb-3"
                placeholder="Enter Email"
                value={useremail}
                required
                onChange={(e) => setUseremail(e.target.value)}
              />
              <div className="mb-3	">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter Password"
                  value={userpassword}
                  required
                  onChange={(e) => setUserpassword(e.target.value)}
                />
                <small>{error.password}</small>
              </div>
              {success && (
                <div className="alert alert-success">
                  Registration Successful
                </div>
              )}
              {loading ? (
                <button
                  type="submit"
                  className="btn btn-info d-block mx-auto"
                  disabled
                >
                  Please Wait....
                </button>
              ) : (
                <button type="submit" className="btn btn-info d-block mx-auto">
                  Register
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
