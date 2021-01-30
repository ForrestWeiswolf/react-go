import './Board.css';
import React, { useState } from 'react';

function Board() {
  const size = 19;
  const initialState = [...new Array(size)].map(
    () => [...new Array(size)].map(() => null)
  );
  const [state, setState] = useState(initialState);
  const [color, setColor] = useState('black');

  const setCellState = (rowIdx, colIdx, value) => {
    const newState = [...state];
    newState[rowIdx] = [...state[colIdx]];
    newState[rowIdx][colIdx] = value;

    setState(newState);
  }

  return (
    <div className="board" data-testid="board">
      <table>
        <tbody>
          {state.map((rowState, rowIdx) =>
            <tr key={rowIdx}>
              {rowState.map((cellState, colIdx) =>
                <td
                  key={colIdx}
                  onClick={() => {
                    setCellState(rowIdx, colIdx, `${color}-stone`)
                    setColor(color === 'black' ? 'white' : 'black')
                  }}
                  className={cellState}
                >.</td>
              )}
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Board;
