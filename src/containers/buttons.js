import React, {Component} from 'react';
import {Button, ButtonToolbar, ButtonGroup} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {changeSize} from '../actions/index';

class Buttons extends Component{
	render(){
		return (
		<ButtonToolbar>
			 	 <ButtonGroup bsSize="small">
	 		  		<Button bsStyle="default">Run</Button>
	 		  		<Button bsStyle="default">Pause</Button>
	 		  		<Button bsStyle="default">Clear</Button>
	 		  		<Button 
		 		  		bsStyle="default"
			 		  	onClick={() => {this.props.changeSize(17)}}>
			 		  		Size:Small
	 		  		</Button>
		 		  	<Button 
			 		  	bsStyle="default"
			 		  	onClick={() => {this.props.changeSize(22)}}>
			 		  		Size:Medium
	  				</Button>
		 		  	<Button 
		 		  		bsStyle="default"
		 		  		onClick={() => {this.props.changeSize(28)}}>
		 		  			Size:Large
 		  			</Button>
			 	 </ButtonGroup>
        </ButtonToolbar>);
	}
}

const mapStateToProps = (state) => {
	return {grid: state.cells}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({changeSize: changeSize}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Buttons);