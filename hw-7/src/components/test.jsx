import { useEffect, useState } from "react";
import CountryCard from "../pages/countryCard/countryCard";
// const CountryCard = ({ name, population, flag }) => {
//   return (
//     <div className="country-card">
//       <h2>{name}</h2>
//       <p>Population: {population}</p>
//       <img src={flag} alt={`${name} flag`} width="100" />
//     </div>
//   );
// };

const Home = () => {
  const [country, setCountry] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        setCountry(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchCountries();
  }, []);

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  // Filter countries based on search term
  const filteredCountries = country.filter((c) => c.name.includes(searchTerm));

  return (
    <div>
      <h1>Country List</h1>
      <input type="text" placeholder=" Search" />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="card-container">
          {filteredCountries.length > 0 ? (
            filteredCountries.map((country, index) => (
              <CountryCard
                key={index}
                name={country.name}
                population={country.population.toLocaleString()}
                flag={country.flags.svg}
              />
            ))
          ) : (
            <p>No countries found.</p>
          )}
        </div>
      )}
    </div>
  );
};
export default Home;
