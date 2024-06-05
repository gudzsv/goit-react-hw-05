// import { useState } from 'react';npm run dev

import AppRoutes from 'routes/AppRoutes';
import './App.css';

import Navigation from 'components/Navigation/Navigation';

function App() {
	// const [count, setCount] = useState(0);

	return (
		<>
			<header>
				<Navigation />
			</header>
			<main>
				<AppRoutes />
			</main>
		</>
	);
}

export default App;
