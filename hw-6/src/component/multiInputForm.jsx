import { useState } from "react";
import "./multiInputForm.css";

const MultiInputForm = () => {
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [interests, setInterests] = useState("");
  const [country, setCountry] = useState("");
  const [error, setError] = useState("");
  const [submitData, setSubmitData] = useState("");

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(String(email).toLowerCase());
  };

  const handleCheckboxInterests = (event) => {
    if (event.target.checked) {
      setInterests([...interests, event.target.value]);
    } else {
      setInterests(
        interests.filter((interest) => interests !== event.target.value)
      );
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name.length < 3) {
      setError("Name must be at least 3 characters long!");
      return;
    }

    if (!validateEmail(email)) {
      setError("Invalid email format");
    } else {
      setError("");
    }

    if (!gender) {
      setError("Please select gender!");
    }

    if (!country) {
      setError("Please select country!");
    }

    if (!interests) {
      setError("Please select at least one interest!");
    }

    const data = {
      name,
      email,
      gender,
      interests,
      country,
    };

    setSubmitData(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form-data">
        <div className="input-text">
          <label>
            <strong>Name:</strong>
            <input
              className="name"
              type="text"
              value={name}
              required
              onChange={(event) => setName(event.target.value)}
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
        </div>

        <br />
        <div className="check-data">
          <div>
            <label>
              <strong>Gender:</strong>
              <input
                className="radio-input"
                type="radio"
                name="gender"
                value="male"
                onChange={(event) => setGender(event.target.value)}
                checked={gender === "male"}
              />
              Male
              <input
                className="radio-input"
                type="radio"
                name="gender"
                value="female"
                onChange={(event) => setGender(event.target.value)}
                checked={gender === "female"}
              />
              Female
            </label>
          </div>

          <br />
          <div>
            <label>
              <strong>Interests:</strong>
              <input
                className="checkbox-input"
                type="checkbox"
                value={"writing"}
                checked={interests.includes("writing")}
                onChange={handleCheckboxInterests}
              />
              Writing
              <input
                className="checkbox-input"
                type="checkbox"
                value={"dance"}
                checked={interests.includes("dance")}
                onChange={handleCheckboxInterests}
              />
              Dance
              <input
                className="checkbox-input"
                type="checkbox"
                value={"travel"}
                checked={interests.includes("travel")}
                onChange={handleCheckboxInterests}
              />
              Travel
              <input
                className="checkbox-input"
                type="checkbox"
                value={"photography"}
                checked={interests.includes("photography")}
                onChange={handleCheckboxInterests}
              />
              Photography
            </label>
          </div>
        </div>

        <br />
        <div className="dropdown">
          <label>
            <strong>Select your country:</strong>
          </label>
          <select
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

        <button type="submit">Submit</button>

        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>

      {submitData && (
        <div className="submitted-data">
          <h2>Submitted Data:</h2>
          <p>
            <strong>Name:</strong> {submitData.name}
          </p>
          <p>
            <strong>Email:</strong> {submitData.email}
          </p>
          <p>
            <strong>Gender:</strong> {submitData.gender}
          </p>
          <p>
            <strong>Interests:</strong> {`${submitData.interests}, `}
          </p>
          <p>
            <strong>Country:</strong> {submitData.country}
          </p>
        </div>
      )}
    </div>
  );
};

export default MultiInputForm;
