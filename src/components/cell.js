import React, {Component} from 'react';

class Cell extends Component{
	render(){
		// console.log(this.props);
		return (
			<div 
			className="cell" 
			style={this.props.alive? 
				{background: '#9B6767'} : 
				{background: '#E8DFDF'}}
			onClick={() => this.props.cellClicked(this.props)}>
			</div>);
	}
}

export default Cell;