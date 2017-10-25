import { combineReducers } from 'redux';
import stateAll from './reducers_all';

const rootReducer = combineReducers({
  stateAll:stateAll
});

export default rootReducer;
