import { render, screen, fireEvent } from '@testing-library/react';
// import { logRoles } from '@testing-library/dom';
import App from '../../App';
import { spacesBetweenColors } from '../../utils/spacesBetweenColors';

test('Button with initial color red', () => {
	const { container } = render(<App />);
	// logRoles(container);
	const colorButton = screen.getByRole('button', {
		name: 'Change color to Midnight Blue'
	});
	expect(colorButton).toHaveStyle({
		'background-color': 'MediumVioletRed'
	});
});

test('Button to change color when clicked', () => {
	render(<App />);
	const colorButton = screen.getByRole('button', {
		name: 'Change color to Midnight Blue'
	});
	// click the button
	fireEvent.click(colorButton);
	expect(colorButton).toHaveStyle({
		'background-color': 'MidnightBlue'
	});
	expect(colorButton).toHaveTextContent('Change color to Medium Violet Red');
});

test('Initial condition', () => {
	render(<App />);
	const colorCheckbox = screen.getByRole('checkbox');
	expect(colorCheckbox).not.toBeChecked();
});

test('Disabling button on unchecking checkbox', () => {
	render(<App />);
	const colorButton = screen.getByRole('button', {
		name: 'Change color to Midnight Blue'
	});
	const checkbox = screen.getByPlaceholderText('Disabled button');

	fireEvent.click(checkbox);
	expect(colorButton).toBeDisabled();
	fireEvent.click(checkbox);
	expect(colorButton).toBeEnabled();
});

test('Disabled button has gray background and reverts to red', () => {
	render(<App />);
	const checkbox = screen.getByPlaceholderText('Disabled button');
	const colorButton = screen.getByRole('button', {
		name: 'Change color to Midnight Blue'
	});

	// disabling button when clicked on checkbox
	fireEvent.click(checkbox);
	expect(colorButton).toHaveStyle({ 'background-color': 'gray' });
	// Re-enabling button when clicked on checkbox
	fireEvent.click(checkbox);
	expect(colorButton).toHaveStyle({
		'background-color': 'MediumVioletRed'
	});
});

test('Disabled button has gray background and reverts to blue', () => {
	render(<App />);
	const checkbox = screen.getByPlaceholderText('Disabled button');
	const colorButton = screen.getByRole('button', {
		name: 'Change color to Midnight Blue'
	});
	// change color of button to blue
	fireEvent.click(colorButton);
	// Disabling button
	fireEvent.click(checkbox);
	expect(colorButton).toHaveStyle({ 'background-color': 'gray' });
	// Re-enabling button
	fireEvent.click(checkbox);
	expect(colorButton).toHaveStyle({
		'background-color': 'MidnightBlue'
	});
});

describe('Spaces between camelCases color letters', () => {
	test('No space between colors with only one color', () => {
		expect(spacesBetweenColors('Red')).toBe('Red');
	});
	test('One space between colors with only one color', () => {
		expect(spacesBetweenColors('MidnightBlue')).toBe('Midnight Blue');
	});
	test('Multiple space between colors with only one color', () => {
		expect(spacesBetweenColors('MidnightVioletBlue')).toBe('Midnight Violet Blue');
	});
});