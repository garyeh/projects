import { RECEIVE_ALL_POKEMON } from '../actions/pokemon_actions';

const pokemonReducer = (state = {}, action) => {
  let nextState;
  switch(action.type) {
    case RECEIVE_ALL_POKEMON:
    nextState = {};
      for (let i = 1; i <= Object.keys(action.pokemon).length; i++) {
        let poke = action.pokemon[i];
        nextState[poke.id] = poke;
      }
      return nextState;
    default:
      return state;
  }
};


export default pokemonReducer;
