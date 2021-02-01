import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders a board', () => {
    render(<App />);
    const board = screen.getByTestId('board');
    expect(board).toBeInTheDocument();
  });
})
