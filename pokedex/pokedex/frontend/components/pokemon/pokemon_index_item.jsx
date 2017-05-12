import React from 'react';
import { Link } from 'react-router-dom';

class PokemonIndexItem extends React.Component {
  render () {
    const poke = this.props.pokemon;
  return (
    <Link to={`/pokemon/${poke.id}`}>
      <li>
        <span>{poke.id}</span>
        <img src={poke.image_url} alt={poke.name} width="50px"/>
        <span>{poke.name}</span>
      </li>
    </Link>
  );
  }
}

export default PokemonIndexItem;
