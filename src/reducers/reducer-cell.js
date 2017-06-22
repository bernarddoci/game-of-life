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
const gridCells = (state = {
	running: false,
	cells: createGrid(3)
	}, action) => {
		let newState;
		switch(action.type){
			case 'CELL_CLICKED':
				newState = {...state};
				newState.cells[action.payload.row][action.payload.id] = action.payload.alive ? 0 : 1;
				return newState;
			case 'CHANGE_SIZE':
				newState = {...state};
				newState.cells = createGrid(action.payload);
				return newState;
			case 'START_GAME':
				newState = {...state};
				newState.running = action.payload;
				return newState;
			case 'KILL_CELL':
				newState = {...state};
				newState.cells[action.payload[0]][action.payload[1]] = 0;
				return newState;
	 		default:
		}
	return state;
}

export default gridCells;

