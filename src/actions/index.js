export const cellClicked = (cell) => {
	// console.log("You selected cell: ", cell);
	return {
		type: 'CELL_CLICKED',
		payload: cell
	}
}
export const changeSize = (size) => {
	return {
		type: 'CHANGE_SIZE',
		payload: size
	}
}
export const startGame = (start) => {
	return {
		type: 'START_GAME',
		payload: start
	}
}
export const killCell = (row, id) => {
	return {
		type: 'KILL_CELL',
		payload: [row, id]
	}
}
export const restoreCell = (row, id) => {
	return {
		type: 'RESTORE_CELL',
		payload: [row, id]
	}
}