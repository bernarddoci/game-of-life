import React, { Component } from 'react';
import Cell from "../components/cell";
import Buttons from '../components/buttons';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {cellClicked, changeSize, startGame} from '../actions/index';

import '../App.css';

class App extends Component {
  
  render() {
    console.log(this.props.grid.running);
    return (
      <div className="App">
      	<h1>Game of Life</h1>
		    <Buttons 
          changeSize={this.props.changeSize}
          startGame={this.props.startGame}
          running={this.props.grid.running}
          />
        <h5>Generation: 53x29</h5>
        <table className="grid_board">
          <tbody>
            {
              this.props.grid.cells.map((row, i) =>{
              // console.log(row, i);
                return(
                    <tr key={i}>
                      {
                        row.map((cell, index) => {
                          return <Cell 
                            alive={cell} 
                            key={index} 
                            id={index}
                            row={i}
                            cellClicked={this.props.cellClicked}/>
                        })
                      }
                    </tr>);
              })
            }
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {grid: state.cells};
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    cellClicked: cellClicked,
    changeSize: changeSize,
    startGame: startGame
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

