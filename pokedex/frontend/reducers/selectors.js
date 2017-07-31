import { values } from 'lodash';

export const selectAllPokemon = ({pokemon}) => {
  return values(pokemon);
};

export const selectItems = ({poke}) => {
  return values(poke.items);
};
