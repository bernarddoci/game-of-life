const addCells = (size) => {
	var arr = [];
	for(var i = 0; i < size ;i++){
		arr.push(0);
	}
	return arr;
}
const createGrid = (size) => {
	var arr = [];
	for(var j = 0; j < size; j++){
		arr.push(addCells(size));
	}
	return arr;
}
const cellClicked = (state = {
	runing: false,
	cells: createGrid(3)
	}, action) => {
		let id, row, alive, newState, cells;
		switch(action.type){
			case 'CELL_CLICKED':
				[id, row, alive] = [action.payload.id, action.payload.row, action.payload.alive ? 0 : 1];
				newState = {...state};
				newState.cells[row][id] = alive;
				return newState;
			case 'CHANGE_SIZE':
				cells = createGrid(action.payload);
				newState = {...state};
				newState.cells = cells;
				return newState;
	 		default:
		}
	return state;
}

export default cellClicked;

