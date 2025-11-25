import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
	// Check if user has an account in sessionStorage
	const hasAccount = sessionStorage.getItem('email') !== null
	const accountLink = hasAccount ? '/confirmation' : '/registration'

	return (
		<header className='header'>
			<div className='header-container'>
				<Link
					to='/'
					className='logo'
				>
					<img
						src='/logo.png'
						alt='Sweets by Servis Logo'
					/>
					<span>Sweets by Servis</span>
				</Link>
				<nav className='nav'>
					<Link to='/'>Home</Link>
					<Link to='/about'>About Us</Link>
					<Link to='/products'>Products</Link>
					<Link to='/events'>Events</Link>
					<Link to={accountLink}>Account</Link>
				</nav>
			</div>
		</header>
	)
}

export default Header;
