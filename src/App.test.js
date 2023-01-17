import { render, screen } from '@testing-library/react';
import App from './App';

test('button with initial color red', () => {
	render(<App />);
	const colorButton = screen.getByRole('button', { name: 'Change color to blue' });
	expect(colorButton).toHaveStyle({ backgroundColor: 'red' });
});
