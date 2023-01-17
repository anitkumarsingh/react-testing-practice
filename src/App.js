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
				style={{ backgroundColor: currentColor }}
				onClick={() => setCurrentColor(color)}
				disabled={isDisabled}>
				Change color to {color}
			</button>
			<input type='checkbox' name='color' onChange={disableHandler} />
		</>
	);
};

export default App;
