import React from 'react';

class PokemonIndex extends React.Component {
  componentDidMount() {
    this.props.requestAllPokemon();
    console.log(this.props.pokemon);
  }

  render(){
    // console.log(this.props.pokemon);
    const pokes = this.props.pokemon.map(poke => (
      <li>
        <span>{poke.name}</span>
        <img src={poke.image_url} alt={poke.name} />

      </li>
    ));
    return(
      <div>
        <ul>
          { pokes }
        </ul>
      </div>
    );
  }
}

export default PokemonIndex;
