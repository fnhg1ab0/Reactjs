import {render, screen} from "@testing-library/react";
import Async from "./Async";

describe('Async component', () => {
    test('renders async', async () => {
        // using mock test data to avoid calling the real API
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => [{id: 'p1', title: 'First post'}]
        });

        // Arrange
        render(<Async/>);
        // Act
        // ... nothing
        // Assert
        // find with return a promise which will resolve when the element is found
        const listElement = await screen.findAllByRole('listitem');
        expect(listElement).not.toHaveLength(0);
    });
});