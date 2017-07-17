import React, {Component} from 'react';

class Cell extends Component{
	// constructor(props){
	// 	super(props);
	// 	this.extractNeighbors = this.extractNeighbors.bind(this);
	// 	this.collectLiveNeighbors = this.collectLiveNeighbors.bind(this);
	// }
	// extractNeighbors(arr, index){
	// 	return arr.slice(index - 1 < 0? index: index - 1, index + 2);
	// }
 // 	collectLiveNeighbors(arr, row, id){
	// 	let result = [];
	// 	result.push(this.extractNeighbors(arr[row], id));
	// 	if(arr[row - 1] !== undefined){
	// 		result.push(this.extractNeighbors(arr[row - 1], id));
	// 	}
	// 	if(arr[row+1] !== undefined){
	// 		result.push(this.extractNeighbors(arr[row + 1], id));
	// 	}
	// 	return result.reduce((prev, curr) => {
	// 		return curr.concat(prev);
	// 	}).filter((cell) => {
	// 		return cell === 1;
	// 	}).length -1;
	// }

	render(){
		// console.log(this.props.gird);
		return (
			<td 
			className="cell" 
			style={this.props.alive? 
				{background: '#B25400'} : 
				{background: '#BCD2D2'}}
			onClick={() => this.props.cellClicked(this.props)}>
			</td>);
	}
}

export default Cell;