import { Link } from 'react-router-dom';
import './about.css';

function About() {
	return (
		<div className='about-page'>
			<section className='about-section'>
				<div className='about-container'>
					<div className='about-image'>
						<img
							src='logo.png'
							alt='Sweets by Servis Logo'
						/>
					</div>
					<div className='about-content'>
						<h2>About Us</h2>
						<p>
							Sweets by Servis is a family-owned bakery dedicated to creating
							delicious and beautiful desserts for all occasions. Founded in
							2010, we have been serving our community with high-quality baked
							goods made from the finest ingredients.
						</p>
					</div>
				</div>
			</section>

			<section className='mission-section'>
				<div className='mission-container'>
					<div className='mission-content'>
						<h2>Our Mission</h2>
						<p>
							Our mission is to bring joy and sweetness to every event through
							our handcrafted desserts. We believe that every celebration
							deserves a special treat, and we are committed to making each
							dessert not only delicious but also a work of art.
						</p>
					</div>
					<div className='mission-image'>
						<img
							src='PBChocolateRiceCrispyTreat.jpg'
							alt='Peanut butter chocolate rice crispy treats'
						/>
					</div>
				</div>
			</section>

			<section className='promise-section'>
				<div className='promise-container'>
					<div className='promise-image'>
						<img
							src='StrawberryCrunchCupcakes.jpg'
							alt='Strawberry crunch cupcakes'
						/>
					</div>
					<div className='promise-content'>
						<h2>Our Promise</h2>
						<p>
							We promise to deliver exceptional quality and taste in every
							dessert. When shopping at Sweets by Servis, you can expect high
							quality ingredients, safe preparation practices, and clean
							packaging. Your satisfaction is our top priority, and we strive to
							exceed your expectations with every purchase.
						</p>
					</div>
				</div>
			</section>

			<section className='cta-section'>
				<div className='cta-container'>
					<div className='cta-content'>
						<h2>Want To Know More About Us?</h2>
						<Link
							to='/registration'
							className='btn-cta'
						>
							Contact Us
						</Link>
					</div>
				</div>
			</section>
		</div>
	)
}

export default About;
