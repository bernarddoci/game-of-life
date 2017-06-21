export const cellClicked = (cell) => {
	console.log("You selected cell: ", cell);
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