import React, { Component } from 'react';
import Cell from "../components/cell";
import Buttons from '../components/buttons';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {cellClicked, changeSize, startGame, killCell, restoreCell} from '../actions/index';

import '../App.scss';

class App extends Component {
  constructor(props){
    super(props);
    this.state = { cells: this.props.grid.cells}
    this.extractNeighbors = this.extractNeighbors.bind(this);
    this.collectLiveNeighbors = this.collectLiveNeighbors.bind(this);
    this.startGame = this.startGame.bind(this);
  }
  extractNeighbors(arr, index, exclude){
    if(exclude){
      let result = [];
      if(index - 1 >= 0){result.push(arr[index-1])}
      if(index + 1 < arr.length){result.push(arr[index+1])}
      return result;
    }else{
      return arr.slice(index - 1 < 0? index: index - 1, index + 2);
    }
  }
  collectLiveNeighbors(arr, row, id){
    let result = [];
    result.push(this.extractNeighbors(arr[row], id, true));
    if(arr[row - 1] !== undefined){
     result.push(this.extractNeighbors(arr[row - 1], id));
    }
    if(arr[row+1] !== undefined){
     result.push(this.extractNeighbors(arr[row + 1], id));
    }
    return result.reduce((prev, curr) => {
      return curr.concat(prev);
    }).filter((cell) => {
      return cell === 1;
    }).length;
  }

  startGame(){
    let counter = 0, neighbors = 0, cells = this.state.cells;
    for(let row = 0; row < cells.length; row++){
        for(let index = 0; index < cells[0].length; index++){
          // console.log("row: " + row,"index: " + index,"neighbors: " + this.collectLiveNeighbors(cells, row, index));
          neighbors = this.collectLiveNeighbors(cells, row, index);
          if(cells[row][index] === 1 && neighbors < 2){
            cells[row][index] = 0; 
            this.setState({cells: cells});
          }else if(cells[row][index] === 0 && neighbors === 3){
            cells[row][index] = 1;
            this.setState({cells: cells});
          }else if(cells[row][index] === 1 && neighbors < 4){
            cells[row][index] = 1;
            this.setState({cells: cells});
          }else if(cells[row][index] === 1 && neighbors > 3){
            cells[row][index] = 0;
            this.setState({cells: cells});
          }
        }
      }
  }


  // componentDidUpdate(prevProps, prevState){
  //   var interval;
  //   if(this.props.grid.running){
  //     interval = setInterval(this.startGame, 1000);
  //   }else if(!this.props.grid.running){
  //     clearInterval(interval);
  //   }
  // }

  render() {
    // console.log(this.props.grid);
    let inter;
    if(this.props.grid.running === true){
      inter = setInterval(this.startGame, 2000);
    }else if(this.props.grid.running === false){
      clearInterval(inter);
    }
    return (
      <div className="App">
      	<h1>Game of Life</h1>
		    <Buttons 
          changeSize={this.props.changeSize}
          startGame={this.props.startGame}
          size={this.props.grid.cells[0].length}
          running={this.props.grid.running}/>
        <h5>Generation: 53x29<br/>{this.props.grid.running? "Running": "Stoped"}</h5>
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
    startGame: startGame,
    killCell: killCell,
    restoreCell: restoreCell
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

