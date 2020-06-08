import React from "react";
import Card from "./Card";

const api = "https://pokeapi.co/api/v2/pokemon/";

class PokemonList extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemons: [],
    };
  }

  componentDidMount() {
    fetch(api)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ pokemons: data.results });
      });
  }

  render() {
    const { pokemons } = this.state;
    return (
      <div>
        <h1> React is working</h1>
        <ul>
          {pokemons.map((pokemon) => (
            <Card name={pokemon.name} url={pokemon.url} />
          ))}
        </ul>
      </div>
    );
  }
}
export default PokemonList;
