import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/home';
import About from './pages/about';
import Products from './pages/products';
import Events from './pages/events';
import Registration from './pages/registration';

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/products' element={<Products />} />
				<Route path='/events' element={<Events />} />
				<Route path='/registration' element={<Registration />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
