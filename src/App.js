import { useState } from 'react';

const App = () => {
	const [currentColor, setCurrentColor] = useState('red');
	const color = currentColor === 'red' ? 'blue' : 'red';

	return (
		<>
			<button
				type='button'
				style={{ backgroundColor: currentColor }}
				onClick={() => setCurrentColor(color)}>
				Change color to {color}
			</button>
		</>
	);
};

export default App;
