import { connect } from 'react-redux';
// import { selectAllPokemon } from '../../reducers/selectors';
import ItemDetail from './item_detail';
import { selectItems } from '../../reducers/selectors';
import { requestSinglePokemon } from '../../actions/pokemon_actions'; 

const mapStateToProps = state => ({
  item: selectItems(state)
});

const mapDispatchToProps = dispatch => ({
  requestSinglePokemon: (id) => dispatch(requestSinglePokemon(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetail);
