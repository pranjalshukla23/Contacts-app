import React, { useState, useEffect } from "react";
import "./App.css";
import ContactCard from "./ContactCard";

const App = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=5")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setResults(data.results);
      });
  }, []);

  return (
    <div>
      {results.map((result, index) => {
        return (
          <ContactCard
            key={index}
            name={result.name.first}
            email={result.email}
            age={result.dob.age}
            avatarUrl={result.picture.large}
          />
        );
      })}
    </div>
  );
};

export default App;
