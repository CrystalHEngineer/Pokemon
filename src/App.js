import './App.css';
import React, {useState} from 'react';

function App() {
  const [pokemon, setPokemon] = useState({});
  const [listPokemons, setListPokemons] = useState([]);

  const getPokemon = () => {
    fetch('https://pokeapi.co/api/v2/pokemon/?offset=1&limit=1118')

    .then((response) => response.json())

    .then((jsonResponse) => {
      console.log(jsonResponse);
      setListPokemons(jsonResponse.results);
    })

    .catch((error) => {
      console.log("No pokemon balls!");
      console.log(error);
    });

    console.log("Ditto is the cooliest!");
  }

  return (
    <div className="App">
      <button onClick={getPokemon}>Fetch Pokemon</button>
      {
        listPokemons.map((pokemon, index) => (
          <div>
            <ul>
              {pokemon.name}
            </ul>
          </div>
        ))
      }
    </div>
  );
}

export default App;
