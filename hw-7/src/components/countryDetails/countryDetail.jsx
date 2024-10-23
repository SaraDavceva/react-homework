import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./countryDetail.css";

const CountryDetail = () => {
  const { name } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${name}`)
      .then((response) => response.json())
      .then((data) => setCountry(data[0]))
      .catch((error) => console.error(error));
  }, [name]);

  if (!country) return <div>Loading...</div>;

  return (
    <div className="card-details">
      <h1>{country.name.common}</h1>
      <img src={country.flags.svg} alt="flag" />
      <p>
        <strong>Capital:</strong> {country.capital}
      </p>
      <p>
        <strong>Currency:</strong> {Object.keys(country.currencies).join(", ")}
      </p>
      <p>
        <strong>Continent:</strong> {country.continents}
      </p>
      <p>
        <strong>Language:</strong> {Object.values(country.languages).join(", ")}
      </p>
      <p>
        <strong>Time zone:</strong> {country.timezones}
      </p>
      <Link
        className="google-maps-link"
        to={country.maps.googleMaps}
        target="_blank"
      >
        View on Google Maps
      </Link>
    </div>
  );
};
export default CountryDetail;
