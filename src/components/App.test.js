import {fireEvent, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';


test('Navigation test', () => {
  render(<App />);

  const link = screen.getAllByText('MENU')[0];
  fireEvent.click(link);

  expect(global.window.location.pathname).toContain('menu');
});


