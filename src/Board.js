import React from 'react';
import {Square} from './Square';

export default function Board(props) {
    const renderSquare = (i, highlightSquares) => {
        const keys = Object.values(highlightSquares || {});
        const classNames = keys.includes(i) ? 'winner-highlight' : '';
        return (
            <Square className={classNames} value={props.boardState[i]}
                onClick={() => { props.handleUserSelectionOnboard(props.boardState, props.isXNext, i) }}
            />);
    }
    return (
        <div >
                <div className="board-row">
                    {renderSquare(0, props.highlightSquares)}
                    {renderSquare(1, props.highlightSquares)}
                    {renderSquare(2, props.highlightSquares)}
                </div>
                <div className="board-row">
                    {renderSquare(3, props.highlightSquares)}
                    {renderSquare(4, props.highlightSquares)}
                    {renderSquare(5, props.highlightSquares)}
                </div>
                <div className="board-row">
                    {renderSquare(6, props.highlightSquares)}
                    {renderSquare(7, props.highlightSquares)}
                    {renderSquare(8, props.highlightSquares)}
                </div>
        </div>
    );
};

