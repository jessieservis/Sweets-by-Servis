import { Link } from 'react-router-dom';
import './about.css';

function About() {
	return (
		<div className='about-page'>
			<section className='section-padding bg-white'>
				<div className='container about-container'>
					<div className='about-image'>
						<img
							src='logo.png'
							alt='Sweets by Servis Logo'
						/>
					</div>
					<div className='about-content'>
						<h2 className='heading-large heading-dark'>About Us</h2>
						<p className='text-body'>
							Sweets by Servis is a family-owned bakery dedicated to creating
							delicious and beautiful desserts for all occasions. Founded in
							2010, we have been serving our community with high-quality baked
							goods made from the finest ingredients.
						</p>
					</div>
				</div>
			</section>

			<section className='section-padding bg-gradient-pink'>
				<div className='container mission-container'>
					<div className='mission-content'>
						<h2 className='heading-large heading-pink'>Our Mission</h2>
						<p className='text-body'>
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

			<section className='section-padding bg-white'>
				<div className='container promise-container'>
					<div className='promise-image'>
						<img
							src='StrawberryCrunchCupcakes.jpg'
							alt='Strawberry crunch cupcakes'
						/>
					</div>
					<div className='promise-content'>
						<h2 className='heading-large heading-pink'>Our Promise</h2>
						<p className='text-body'>
							We promise to deliver exceptional quality and taste in every
							dessert. When shopping at Sweets by Servis, you can expect high
							quality ingredients, safe preparation practices, and clean
							packaging. Your satisfaction is our top priority, and we strive to
							exceed your expectations with every purchase.
						</p>
					</div>
				</div>
			</section>

			<section className='section-padding bg-gradient-pink'>
				<div className='container cta-container'>
					<div className='cta-content'>
						<h2 className='heading-large heading-pink'>
							Want To Know More About Us?
						</h2>
						<Link
							to='/registration'
							className='btn btn-pink'
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
