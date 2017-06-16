import React from 'react';
import {Button, ButtonToolbar, ButtonGroup} from 'react-bootstrap'

const Buttons = () => {
	return (
		<ButtonToolbar>
			 	 <ButtonGroup bsSize="small">
			 		  <Button bsStyle="default">Run</Button>
			 		  <Button bsStyle="default">Pause</Button>
			 		  <Button bsStyle="default">Clear</Button>
			 		  <Button bsStyle="default">Size:Small</Button>
			 		  <Button bsStyle="default">Size:Medium</Button>
			 		  <Button bsStyle="default">Size:Large</Button>
			 	 </ButtonGroup>
        </ButtonToolbar>);
}

export default Buttons;