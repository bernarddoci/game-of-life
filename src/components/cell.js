import React, {Component} from 'react';

class Cell extends Component{
	render(){
		// console.log(this.props);
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