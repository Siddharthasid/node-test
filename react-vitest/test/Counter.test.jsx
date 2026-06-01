import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Counter from "../src/components/Counter";


test('render counter component', () => {
    render(<Counter />);
    const buttonElement = screen.getByRole('button', {name: /Increase Count/i});
    expect(buttonElement).toBeInTheDocument();
    const countElement = screen.getByText(/Count is 0/i);
    expect(countElement).toBeInTheDocument();
    const decreaseButtonElement = screen.getByRole('button', {name: /Decrease Count/i});
    expect(decreaseButtonElement).toBeInTheDocument();
})

test('increase count', () => {
    render(<Counter />);
    const buttonElement = screen.getByRole('button', {name: /Increase Count/i});
    fireEvent.click(buttonElement);
    const countElement = screen.getByText(/Count is 1/i);
    expect(countElement).toBeInTheDocument();
})

test('decrease count', () => {
    render(<Counter />);
    const buttonElement = screen.getByRole('button', {name: /Decrease Count/i});
    fireEvent.click(buttonElement);
    const countElement = screen.getByText(/Count is -1/i);
    expect(countElement).toBeInTheDocument();
})