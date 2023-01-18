import { useState } from 'react';
import { spacesBetweenColors } from './utils/spacesBetweenColors';

const App = () => {
	const [currentColor, setCurrentColor] = useState('MediumVioletRed');
	const [isDisabled, setIsDisabled] = useState(false);
	const color = currentColor === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed';

	const disableHandler = () => {
		setIsDisabled(!isDisabled);
	};

	return (
		<>
			<button
				type='button'
				style={{ backgroundColor: isDisabled ? 'gray' : currentColor }}
				onClick={() => setCurrentColor(color)}
				disabled={isDisabled}>
				Change color to {spacesBetweenColors(color)}
			</button>
			<br />
			<input
				type='checkbox'
				name='Disabled Button'
				onChange={disableHandler}
				id='disabled-checkbox'
				placeholder='Disabled button'
			/>
			Disabled Button
		</>
	);
};

export default App;
