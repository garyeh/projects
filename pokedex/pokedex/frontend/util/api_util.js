export const fetchAllPokemon = () => (
  $.ajax({
    method: 'GET',
    url: 'api/pokemon'
  })
);

export const fetchPokemonDetail = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/pokemon/${id}`
  })
);
