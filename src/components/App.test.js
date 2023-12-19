import {fireEvent, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import {fetchAPI} from "../__mocks__/apiMock";

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
});

describe('Reservation', () => {
  test('Guest field working properly ', () => {
    const { container } = render(<App />);
    fireEvent.click(screen.getAllByText('RESERVATIONS')[0]);

    const input = container.querySelector('.guest-group input');

    fireEvent.change(
        input, {target: {value: '3'}})
    expect(input.value).toBe('3')
  });
  test('Date Validation working properly', () => {
    const { container } = render(<App />);
    fireEvent.click(screen.getAllByText('RESERVATIONS')[0]);

    const input = container.querySelector('#date-input');
    fireEvent.change(input, { target: { value: '2023-01-01' } });

    expect(input.classList.contains('invalid')).toBe(true)
  });
  test('Blocking sending to incorrectly entered data', () => {
    const { container } = render(<App />);
    fireEvent.click(screen.getAllByText('RESERVATIONS')[0]);

    const input = container.querySelector('#date-input');
    fireEvent.change(input, { target: { value: '2023-01-01' } });

    expect(input.classList.contains('invalid')).toBe(true)

    const submitButton = container.querySelector('.reservation-form [type=submit]')
    expect(submitButton).toBeNull()

  });
  test('Submitting the form if the data is entered correctly', () => {
    const { container } = render(<App />);
    fireEvent.click(screen.getAllByText('RESERVATIONS')[0]);

    const input = container.querySelector('#date-input');
    fireEvent.change(input, { target: { value: new Date() } });

    const submitButton = container.querySelector('.reservation-form [type=submit]');
    fireEvent.click(submitButton);
    expect( container.querySelector('.loader') ).toBeInTheDocument()
  });
});

describe('API', () => {
  test('Check API Answer', () => {

    fetchAPI(new Date())
        .then(({code,data}) => {
            expect(code).toEqual(200);
            expect( !!data.length ).toEqual( true );
        })
  });
});




