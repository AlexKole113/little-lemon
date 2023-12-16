import {fireEvent, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('Navigation', ()=> {
  test('Header Navigation test', () => {
    render(<App />);

    const link = screen.getAllByText('MENU')[0];
    fireEvent.click(link);

    expect(global.window.location.pathname).toContain('menu');
  });
  test('Footer Navigation test', () => {
    render(<App />);

    const link = document.querySelector('.footer [href="/order-online"]');
    fireEvent.click(link);

    expect(global.window.location.pathname).toContain('order-online');
  });
});

describe('Cart', () => {
  test('Add to Cart', () => {
    const { container } = render(<App />);
    fireEvent.click(screen.getAllByText('MENU')[0]);

    const link = screen.getAllByText('Order a delivery')[0];
    fireEvent.click(link);

    const alert1 = container.querySelector('.in-cart');
    const alert2 = container.querySelector('.go-to-cart');

    expect(alert1).toBeInTheDocument();
    expect(alert2).toBeInTheDocument();

  });
  test('Remove from Cart', () => {
    const { container } = render(<App />);
    fireEvent.click(screen.getAllByText('MENU')[0]);

    const linkToAdd = screen.getAllByText('Order a delivery')[0];
    fireEvent.click(linkToAdd);
    const linkToRemove = screen.getAllByText('Remove from Cart')[0];
    fireEvent.click(linkToRemove);

    const alert1 = container.querySelector('.in-cart');
    const alert2 = container.querySelector('.go-to-cart');

    expect(alert1).not.toBeInTheDocument();
    expect(alert2).not.toBeInTheDocument();
  });
})

describe('Reservation', () => {
  test('Reservation Form: Input Form Guests', () => {
    const { container } = render(<App />);
    fireEvent.click(screen.getAllByText('RESERVATIONS')[0]);

    const input = container.querySelector('.guest-group input');

    fireEvent.change(
        input, {target: {value: '3'}})
    expect(input.value).toBe('3')
  });
})




