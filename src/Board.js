import './Board.css';
import React, { useState } from 'react';

function Board() {
  const [state, setState] = useState(Array(19).fill(
    Array(19).fill(null)
  ))

  return (
    <div className="board" data-testid="board">
      <table>
        <tbody>
          {state.map((rowState, rowIdx) => <tr key={rowIdx}>
            {rowState.map((cellState, colIdx) => <td key={colIdx} onClick={() => {
              const newState = [...state]
              newState[rowIdx] = [...state[colIdx]]
              newState[rowIdx][colIdx] = 'black-stone'

              setState(newState)
            }} className={cellState}>.</td>)}
          </tr>)}
        </tbody>
      </table>
    </div>
  );
}

export default Board;
