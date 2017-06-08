import React, { Component } from 'react';
import {Button, ButtonToolbar, ButtonGroup} from 'react-bootstrap'
import Cell from "../components/cell";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {cellClicked} from '../actions/index';

import '../App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      	<h1>Game of Life</h1>
		    <ButtonToolbar>
			 	 <ButtonGroup bsSize="large">
			 		  <Button bsStyle="default">Run</Button>
			 		  <Button bsStyle="default">Pause</Button>
			 		  <Button bsStyle="default">Clear</Button>
			 	 </ButtonGroup>
        </ButtonToolbar>
        <h4>Generation: 100</h4>
        <div className="grid_board">
          {
            this.props.cells.cells.map((cell, index) =>{
              return <Cell 
                alive={cell} 
                key={index} 
                id={index}
                cellClicked={this.props.cellClicked}/>
            })
          }
        </div>)
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {cells: state.cells};
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({cellClicked: cellClicked}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
