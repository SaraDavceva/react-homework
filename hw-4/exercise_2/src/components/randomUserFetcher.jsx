import React, { useEffect, useState } from "react";
import "./randomUserFetcher.css";

const RandocUserFetcher = () => {
  const [user, setUser] = useState(null);
  const [id, setId] = useState(null);

  useEffect(() => {
    if (id !== null) {
      const fetchRandomUser = async () => {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        const data = await response.json();
        setUser(data);
      };
      fetchRandomUser();
    }
  }, [id]);
  const handleButton = () => {
    const id = Math.floor(Math.random() * 10) + 1;
    setId(id);
  };

  return (
    <div className="card">
      <button onClick={handleButton}>
        <strong>Get Random user</strong>
      </button>
      {user && (
        <div className="user">
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>City:</strong> {user.address.city}
          </p>
          <p>
            <strong>Phone number:</strong> {user.phone}
          </p>
          <p>
            <strong>Company name:</strong> {user.company.name}
          </p>
        </div>
      )}
    </div>
  );
};

export default RandocUserFetcher;
