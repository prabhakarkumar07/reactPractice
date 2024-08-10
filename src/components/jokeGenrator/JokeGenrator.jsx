import React, { useState } from "react";
import "./styles.css";
function JokeGenrator() {
  const [joke, setJoke] = useState("");
  async function fetchJoke() {
    try {
      const response = await fetch(
        "https://sv443.net/jokeapi/v2/joke/Programming?type=single"
      );
      const data = await response.json();
      setJoke(data.joke);
    } catch (error) {
      console.log(error);
    }
  }
  const handleClick = () => {
    fetchJoke();
  };

  return (
    <div className="joke-container">
      <h1 className="joke-title">Joke Generator using React app through API</h1>
      <button onClick={handleClick}>Click to genrate a joke</button>
      <p>{joke}</p>
    </div>
  );
}

export default JokeGenrator;
