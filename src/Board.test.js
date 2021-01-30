import { render, screen, within, fireEvent } from '@testing-library/react';
import Board from './Board';

describe('Board', () => {
  it('Renders a 19 by 19 grid', () => {
    render(<Board />);
    const rows = screen.queryAllByRole('row');
    expect(rows.length).toBe(19);

    rows.forEach(row => {
      const cells = within(row).queryAllByRole('cell');
      expect(cells.length).toBe(19);
    })
  });

  it('When a cell is first clicked, it is filled in black', () => {
    render(<Board />);
    const cells = screen.queryAllByRole('cell');

    fireEvent.click(cells[12]);

    expect(cells[12]).toHaveClass('black-stone')
  })
})
