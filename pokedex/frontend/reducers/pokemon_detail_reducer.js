import { FETCH_POKEMON } from '../actions/pokemon_actions';

const pokemonDetailReducer = (state = {}, action) => {
  let nextState;
  switch(action.type) {
    case FETCH_POKEMON:
      nextState = action.pokemon;
      return Object.assign({}, state, nextState);
    default:
      return state;
  }
};


export default pokemonDetailReducer;
