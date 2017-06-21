import React from 'react';
import {Button, ButtonToolbar, ButtonGroup} from 'react-bootstrap';

const Buttons = (props) => {
	return (
		<ButtonToolbar>
			 	 <ButtonGroup bsSize="small">
	 		  		<Button bsStyle="default"
	 		  		onClick={()=>{props.startGame(true)}}>
	 		  				Run
	 		  		</Button>
	 		  		<Button 
	 		  			bsStyle="default">
	 		  				Pause
	 		  		</Button>
	 		  		<Button 
	 		  			bsStyle="default"
	 		  			onClick={()=>{props.startGame(false)}}>
	 		  				Clear
	 		  		</Button>
	 		  		<Button 
		 		  		bsStyle="default"
			 		  	onClick={() => {props.changeSize(17)}}>
			 		  		Small
	 		  		</Button>
		 		  	<Button 
			 		  	bsStyle="default"
			 		  	onClick={() => {props.changeSize(22)}}>
			 		  		Medium
	  				</Button>
		 		  	<Button 
		 		  		bsStyle="default"
		 		  		onClick={() => {props.changeSize(28)}}>
		 		  			Large
 		  			</Button>
			 	 </ButtonGroup>
        </ButtonToolbar>);
}

export default Buttons;