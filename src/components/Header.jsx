import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
	return (
		<header className='header'>
			<div className='header-container'>
				<Link to='/' className='logo'>
					<svg width='16' height='16' viewBox='0 0 16 16' fill='none'>
						<path
							d='M8 0L10.5 5.5L16 6.5L12 10.5L13 16L8 13.5L3 16L4 10.5L0 6.5L5.5 5.5L8 0Z'
							fill='#FF6B9D'
						/>
					</svg>
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
	);
}

export default Header;
