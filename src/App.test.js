import { render, screen } from '@testing-library/react';
import App from './App';
import { getMovieByID } from "./services/movies";

test('renders Studio Ghibli Collection', () => {
  render(<App />);
  const linkElement = screen.getByText(/Studio Ghibli Collection/i);
  expect(linkElement).toBeInTheDocument();
});

test('gets movie by ID', () => {
  const mid = '21';
  const movie = getMovieByID(mid);
  expect(movie).not.toBeUndefined();
  expect(movie).toHaveProperty('title', 'The Tale of the Princess Kaguya');
  expect(movie).toHaveProperty('directed', 'Miyazaki Hayao');
  expect(movie).toHaveProperty('released', '2013');
  expect(movie).toHaveProperty('runtime', 120);
});
