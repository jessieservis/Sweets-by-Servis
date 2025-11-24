import { Link } from 'react-router-dom';
import './home.css';

function Home() {
	return (
		<div className='home-page'>
			<section className='section-padding bg-gradient-light'>
				<div className='container flex-center'>
					<div className='hero-image image-container'>
						<img
							src='/RoadsideShop.png'
							alt='Sweets by Servis Roadside Shop'
						/>
					</div>
					<div className='hero-content'>
						<h1>Welcome to Sweets by Servis</h1>
						<p className='text-body'>
							Hi! Sweets by Servis is your go-to roadside shop for delicious
							homemade treats. We specialize in a variety of baked goods, from
							cookies and cupcakes to rice crispy treats and more. Our mission
							is to bring joy to your taste buds with our delectable creations.
						</p>
						<Link
							to='/about'
							className='btn btn-green'
						>
							About Us
						</Link>
					</div>
				</div>
			</section>

			<section className='section-padding bg-gradient-pink'>
				<div className='container section-container'>
					<h2 className='heading-large heading-dark'>Check Out Our Best Sellers</h2>
					<div className='products-grid'>
						<div className='product-card'>
							<img
								src='\chocolateChipCookies.jpg'
								alt='Chocolate chip cookies'
							/>
							<h3>Chocolate Chip Cookies</h3>
						</div>
						<div className='product-card'>
							<img
								src='\PBChocolateRiceCrispyTreat.jpg'
								alt='Peanut Butter Chocolate Rice Crispy Treat'
							/>
							<h3>Peanut Butter Chocolate Rice Crispy Treat</h3>
						</div>
						<div className='product-card'>
							<img
								src='\chocolateChipCookies.jpg'
								alt='Chocolate chip cookies'
							/>
							<h3>Chocolate Chip Cookies</h3>
						</div>
						<div className='product-card'>
							<img
								src='\cookiesAndCreamCupcakes.jpg'
								alt='Cookies and Cream Cupcakes'
							/>
							<h3>Cookies and Cream Cupcakes</h3>
						</div>
					</div>
					<Link
						to='/products'
						className='btn btn-green'
					>
						View all products
					</Link>
				</div>
			</section>

			<section className='section-padding bg-white'>
				<div className='container flex-center'>
					<div className='events-content'>
						<h2 className='heading-large heading-dark'>Upcoming Events</h2>
						<p className='text-body'>
							We will be attending the Grand Rapids Christkindl Markt this
							holiday season, where you can find us offering a selection of our
							best-selling cookies, cupcakes, and rice crispy treats. Stay tuned
							for more event announcements and we hope to see you there!
						</p>
						<Link
							to='/events'
							className='btn btn-green'
						>
							View More Details
						</Link>
					</div>
					<div className='events-image image-container'>
						<img
							src='/ChristKindlMarkt.jpg'
							alt='Grand Rapids Christkindl Markt Event'
						/>
					</div>
				</div>
			</section>

			<section className='section-padding bg-gradient-pink'>
				<div className='container section-container'>
					<h2 className='heading-large heading-dark'>Our Customers Feedback</h2>
					<div className='feedback-card'>
						<p className='feedback-text'>
							"Sweets by Servis has the most amazing homemade treats! Their
							cookies are always fresh and delicious, and their cupcakes are
							moist and flavorful. I highly recommend their rice crispy treats
							as well - they are the perfect combination of crispy and gooey.
							The staff is friendly and welcoming, making every visit a
							pleasure. I can't get enough of Sweets by Servis!"
						</p>
						<p className='customer-name'>Georgia Green</p>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Home;
