import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
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
					<Link to='/registration'>Email Registration</Link>
				</nav>
			</div>
		</header>
	)
}

export default Header;
