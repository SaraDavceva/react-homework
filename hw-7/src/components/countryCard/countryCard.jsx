import { Link } from "react-router-dom";
import "./countryCard.css";

const CountryCard = ({ country }) => {
  return (
    <div className="country-card">
      <h2>{country.name.common}</h2>
      <img src={country.flags.svg} alt="flag" />
      <p>
        <strong>Population:</strong> {country.population.toLocaleString()}
      </p>
      <p>
        <strong>Continent:</strong> {country.continents}
      </p>
      <Link
        className="details-link"
        to={`/country/${country.name.common.toLowerCase()}`}
      >
        View Details
      </Link>
    </div>
  );
};

export default CountryCard;
