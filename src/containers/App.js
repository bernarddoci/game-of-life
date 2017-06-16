import React, { Component } from 'react';
import Cell from "../components/cell";
import Buttons from '../components/buttons';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {cellClicked} from '../actions/index';

import '../App.css';

class App extends Component {
  
  
  render() {
    // console.log(this.props.grid);
    return (
      <div className="App">
      	<h1>Game of Life</h1>
		    <Buttons />
        <h4>Generation: 53x29</h4>
        <div className="grid_board">
          {
            this.props.grid.cells.map((row, i) =>{
              // console.log(row, index);
              return row.map((cell, index) => {
                return <Cell 
                  alive={cell} 
                  key={index} 
                  id={index}
                  row={i}
                  cellClicked={this.props.cellClicked}/>
              });
            })
          }
        </div>)
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {grid: state.cells};
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({cellClicked: cellClicked}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
