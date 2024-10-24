import { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import "./formDetails.css";

const FormDetails = () => {
  const [formData, setFormData] = useLocalStorage("userData", {
    username: "",
    password: "",
    email: "",
    state: "",
  });
  const [username, setUsername] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");
  const [error, setError] = useState("");
  const [submitData, setSubmitData] = useState("");

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(String(email).toLowerCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateEmail(email)) {
      setError("Invalid email format");
    } else {
      setError("");
    }

    if (password.length < 6) {
      setError("Password should have at least 6 characters!");
    }

    const data = {
      username,
      email,
      password,
      country,
    };

    setSubmitData(data);
  };

  const handleClear = () => {
    setFormData({
      username: "",
      password: "",
      email: "",
      state: "",
    });
    setSubmitData(null);
    window.localStorage.removeItem("userData");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form-data">
        <div className="input-text">
          <label>
            <strong>Username:</strong>
            <input
              className="username"
              type="text"
              value={username}
              required
              onChange={(event) => setUsername(event.target.value)}
            />
          </label>

          <br />

          <label>
            <strong>Email:</strong>
            <input
              className="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </label>

          <br />

          <strong>Password:</strong>
          <input
            className="password"
            type="password"
            value={password}
            required
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <br />

        <div className="dropdown">
          <label>
            <strong>Select your country:</strong>
          </label>
          <select
            className="select-country"
            value={country}
            onChange={(event) => setCountry(event.target.value)}
          >
            <option value="">Select</option>
            <option value="Macedonia">Macedonia</option>
            <option value="France">France</option>
            <option value="Italy">Italy</option>
            <option value="Slovenia">Slovenia</option>
          </select>
        </div>

        <br />

        <button className="submit-button" type="submit">
          Submit
        </button>

        <button className="clear-button" type="button" onClick={handleClear}>
          Clear Form
        </button>

        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>

      {submitData && (
        <div className="submitted-data">
          <h2>Submitted Data:</h2>
          <p>
            <strong>Username:</strong> {submitData.username}
          </p>
          <p>
            <strong>Email:</strong> {submitData.email}
          </p>

          <p>
            <strong>Country:</strong> {submitData.country}
          </p>
        </div>
      )}
    </div>
  );
};

export default FormDetails;
