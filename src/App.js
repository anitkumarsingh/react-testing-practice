import { useState } from 'react';

const App = () => {
	const [currentColor, setCurrentColor] = useState('red');
  const [isDisabled, setIsDisabled] = useState(false);
	const color = currentColor === 'red' ? 'blue' : 'red';

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
				Change color to {color}
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
