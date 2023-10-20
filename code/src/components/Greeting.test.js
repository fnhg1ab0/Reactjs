import {render, screen} from "@testing-library/react";
import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";

describe('Greeting component', () => {
    test('renders Hello World as a text', () => {
        // Arrange
        render(<Greeting/>);
        // Act
        // ... nothing
        // Assert
        // getByText will throw an error if the element is not found
        const helloWorldElement = screen.getByText('Hello World', {exact: false});
        expect(helloWorldElement).toBeInTheDocument();
    });

    test('renders paragraph', () => {
        // Arrange
        render(<Greeting/>);
        // Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);
        // Assert
        const paragraphElement = screen.getByText('It\'s good to see you!', {exact: false});
        expect(paragraphElement).toBeInTheDocument();
    });

    test('renders the first time component that paragraph not show', () => {
        // Arrange
        render(<Greeting/>);
        // Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);
        // Assert
        // queryByText will return null if the element is not found
        const paragraphElement = screen.queryByText('Awesome', {exact: false});
        expect(paragraphElement).toBeNull();
    });
});