import { render, screen, fireEvent } from '@testing-library/react';
import { logRoles } from '@testing-library/dom';
import App from '../../App';

test('button with initial color red', () => {
	const { container } = render(<App />);
	logRoles(container);
	const colorButton = screen.getByRole('button', { name: 'Change color to blue' });
	expect(colorButton).toHaveStyle({ 'background-color': 'red' });
});

test('button to change color when clicked', () => {
	render(<App />);
	const colorButton = screen.getByRole('button', { name: 'Change color to blue' });
	// click the button
	fireEvent.click(colorButton);
	expect(colorButton).toHaveStyle({ 'background-color': 'blue' });
	expect(colorButton).toHaveTextContent('Change color to red');
});
