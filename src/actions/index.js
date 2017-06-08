export const cellClicked = (cell) => {
	console.log("You selected cell: ", cell);
	return {
		type: 'CELL_CLICKED',
		payload: cell
	}
}