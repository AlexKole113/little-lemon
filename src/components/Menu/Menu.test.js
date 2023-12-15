import {fireEvent, render, screen} from "@testing-library/react";
import '@testing-library/jest-dom'
import App from "../App";

test('Navigation to Menu test', () => {
    render(<App />);

    const navLink = screen.getAllByText('MENU')[0];
    fireEvent.click(navLink);
    expect(global.window.location.pathname).toContain('menu');

});


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

