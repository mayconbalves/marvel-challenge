import { render, screen } from '@testing-library/react';
import Home from './';

test('renders title of home', () => {
  render(<Home />);
  const linkElement = screen.getByText(/home/i);
  expect(linkElement).toBeInTheDocument();
});
