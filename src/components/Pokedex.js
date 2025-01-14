import React from 'react';
import Pokemon from './Pokemon'

class Pokedex extends React.Component {
  render() {
  const { pokemons } =  this.props;
    return (
    <div class="pokemons-list">
      { pokemons.map((pokemon) => (
        <Pokemon key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  )
}
}

export default Pokedex;