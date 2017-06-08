import {combineReducers} from 'redux';
import cellClicked from './reducer-cell';

const allReducers = combineReducers({cells: cellClicked})

export default allReducers;