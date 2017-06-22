import {combineReducers} from 'redux';
import gridCells from './reducer-cell';

const allReducers = combineReducers({cells: gridCells})

export default allReducers;