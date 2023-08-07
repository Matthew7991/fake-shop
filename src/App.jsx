import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Details from './components/pages/Details/Details';

function App() {
	return (
		<>
			<Routes>
				<Route
					path='/'
					element={<Home />}
				/>
				<Route
					path='/details/:productId'
					element={<Details />}
				/>
			</Routes>
		</>
	);
}

export default App;
