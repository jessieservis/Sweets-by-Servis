import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/home/home.jsx'
import About from './pages/about/about.jsx'
import Products from './pages/products/products.jsx'
import Events from './pages/events/events.jsx'
import Registration from './pages/registration/registration.jsx'
import Confirmation from './pages/confirmation/confirmation.jsx'

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route
					path='/'
					element={<Home />}
				/>
				<Route
					path='/about'
					element={<About />}
				/>
				<Route
					path='/products'
					element={<Products />}
				/>
				<Route
					path='/events'
					element={<Events />}
				/>
				<Route
					path='/registration'
					element={<Registration />}
				/>
				<Route
					path='/confirmation'
					element={<Confirmation />}
				/>
			</Routes>
			<Footer />
		</Router>
	)
}

export default App
