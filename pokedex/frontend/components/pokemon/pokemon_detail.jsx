import React from 'react';
import { Route, Link, NavLink } from 'react-router-dom';
import itemDetailContainer from '../item/item_detail_container';

class PokemonDetail extends React.Component{

  componentDidMount(){
    this.props.requestSinglePokemon(this.props.match.params.id);
  }

  componentWillReceiveProps(newProps){
    if (newProps.match.params.id !== this.props.match.params.id) {
      this.props.requestSinglePokemon(newProps.match.params.id);
    }
  }

  render(){
    let poke = this.props.poke;
    let items = poke.items;
    let itemNames;

    if (items !== undefined) {
      itemNames = items.map(item =>
        <li>
          <div className="imageBox">
            <Link to={`/pokemon/${poke.id}/items/${item.id}`}>
              <img className="itemImg" src={item.image_url} />
            </Link>
          </div>
          <Route path="/pokemon/:id/items/:id" component={itemDetailContainer}/>
        </li>
      );
    }

    return <div className="image">
      <div>
        <img className="imgDetail" src={poke.image_url} />
      </div>
      <span className="pokeItem">
        <p id="name">{poke.name}</p>
        <p>{`Type: ${poke.poke_type}`}</p>
        <p>{`Attack: ${poke.attack}`}</p>
        <p>{`Defense: ${poke.defense}`}</p>
        <p>{`Moves: ${poke.moves}`}</p>
        <ul>{itemNames}</ul>
      </span>
    </div>;
  }
}

export default PokemonDetail;
