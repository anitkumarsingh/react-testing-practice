import { render, screen } from '@testing-library/react';
import { logRoles } from '@testing-library/dom';
import App from '../../App';

test('button with initial color red', () => {
	const { container } = render(<App />);
	logRoles(container);
	const colorButton = screen.getByRole('button', { name: 'Change color to blue' });
	expect(colorButton).toHaveStyle({ 'background-color': 'red' });
});
