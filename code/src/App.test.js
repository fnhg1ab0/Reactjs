import {render, screen} from '@testing-library/react';
import App from './App';

// group of tests
describe('App', () => {
    test('renders learn react link', () => {
        render(<App/>);
        const linkElement = screen.getByText(/learn react/i);
        expect(linkElement).toBeInTheDocument();
    });
});
