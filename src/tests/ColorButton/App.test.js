import { render, screen, fireEvent } from '@testing-library/react';
// import { logRoles } from '@testing-library/dom';
import App from '../../App';

test('button with initial color red', () => {
	const { container } = render(<App />);
	// logRoles(container);
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

test('initial condition', () => {
	render(<App />);
	const colorCheckbox = screen.getByRole('checkbox');
	expect(colorCheckbox).not.toBeChecked();
});

test('diabling button on unchecking checkbox', () => {
	render(<App />);
	const colorButton = screen.getByRole('button', { name: 'Change color to blue' });
	const checkbox = screen.getByRole('checkbox');

	fireEvent.click(checkbox);
	expect(colorButton).toBeDisabled();
	fireEvent.click(checkbox);
	expect(colorButton).toBeEnabled();
});