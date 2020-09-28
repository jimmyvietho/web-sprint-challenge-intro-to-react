import React, { useState, useEffect } from 'react';
import './App.css';
import axios from "axios"
import Character from './components/Character';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get('https://swapi.dev/api/people')
      .then((res) => {
        console.log(res);
        setCharacters(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  

    return (
      <div className="App">
        <h1 className="Header">Characters</h1>
        {characters.map(character => {
          return (
            <Character
              key={character.created}
              name={character.name}
              gender={character.gender}
              height={character.height}
              mass={character.mass}
              birthYear={character.birth_year}
              eyeColor={character.eye_color}
              hairColor={character.hair_color}
              
            />
          );
        })}
      </div>
    );
  }

export default App;
