import './Board.css';

function Board() {
  const state = Array(19).fill(
    Array(19).fill(null)
  )

  return (
    <div className="board" data-testid="board">
      {/* {state.map((intersectionState, idx) => <div role="row" key={idx}></div>)} */}
      <table>
        <tbody>
          {state.map((rowState, idx) => <tr key={idx}>
            {rowState.map((intersection, idx) => <td key={idx}>
              <span>.</span>
            </td>)}
          </tr>)}
        </tbody>
      </table>
    </div>
  );
}

export default Board;
