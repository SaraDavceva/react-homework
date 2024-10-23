import { useEffect, useState } from "react";
import CountryCard from "../../components/countryCard/countryCard";
import "./home.css";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchCountry, setSearchCountry] = useState("");

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Error", error);
        setLoading(true);
      });
  }, []);

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchCountry.toLowerCase())
  );

  if (loading) return <p>Loading...</p>;

  return (
    <div className="country-list">
      <div>
        <h1>Country List</h1>
        <input
          className="search-bar"
          type="text"
          placeholder="Search Country"
          value={searchCountry}
          onChange={(event) => setSearchCountry(event.target.value)}
        />
      </div>

      <div className="card-container">
        {filteredCountries.map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
    </div>
  );
};

export default Home;
