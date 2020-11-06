import Board from './Board';
import React from 'react';
import {calculateWinner} from './utils';


export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            values: Array(9).fill(null),
            isXNext: true,
            history : []
        }
    }
    handleUserSelectionOnboard = (boardState, isXNext, squareIndex) => {
        const vals = boardState.slice();
        if (calculateWinner(vals).winner || vals[squareIndex]) {
            return;
        }
        vals[squareIndex] = isXNext ? 'X' : 'Y';
        const history = this.state.history;
        history.push(boardState);
        this.setState({ values: vals, isXNext: !isXNext, history : history });
    };

    goToHistoryState = (ind)=>{
        const history = this.state.history;
        const vals = history[ind];
        history.splice(ind, history.length);
        const isXNext = Boolean(ind % 2 === 0);
       this.setState({values: vals,isXNext: isXNext, history : history});
    };

    render() {
        const win = calculateWinner(this.state.values);
        const winner = 'Winner is : ' + win.winner;
        const next = this.state.isXNext ? 'X' : 'Y';
        const status = 'Next player: ' + next;
        return (
            <div className="game">
                <div className="game-board">
                    <Board boardState={this.state.values}
                        isXNext={this.state.isXNext}
                        handleUserSelectionOnboard={this.handleUserSelectionOnboard} 
                        highlightSquares={win.Lines} />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    {win.winner ? <div>{winner}</div> : ''}
                    <div className='row'>
                    {
                        this.state.history.map((obj,ind)=>{
                           return  ind !== 0 ? <button key={ind} onClick={()=>{this.goToHistoryState(ind)}}>Go to State{ind}</button> : 
                            <button key={ind} onClick={()=>{this.goToHistoryState(ind)}}>Restart</button>;
                        })
                    }
                    </div>
                    
                </div>
            </div>
        );
    }
}

