import { Link } from 'react-router-dom';
import './home.css';

function Home() {
	return (
		<div className='home-page'>
			<section className='hero-section'>
				<div className='hero-container'>
					<div className='hero-image'>
						<img
							src='../heroImage.png'
							alt='Beautiful dessert cake'
						/>
					</div>
					<div className='hero-content'>
						<h1>Deliver You A Blissful Dessert In Every Bite</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur. Tortor sem
							in consequat enim vitae pellentesque. Massa aliquam
							turpis pellentesque arcu varius et tincidunt.
						</p>
						<Link to='/about' className='btn-primary'>
							About Us
						</Link>
					</div>
				</div>
			</section>

			<section className='best-sellers-section'>
				<div className='section-container'>
					<h2>Check Out Our Best Sellers</h2>
					<div className='products-grid'>
						<div className='product-card'>
							<img
								src='https://images.pexels.com/photos/887853/pexels-photo-887853.jpeg?auto=compress&cs=tinysrgb&w=400'
								alt='Lemon cream dessert'
							/>
							<h3>Lemon cream</h3>
						</div>
						<div className='product-card'>
							<img
								src='https://images.pexels.com/photos/1120970/pexels-photo-1120970.jpeg?auto=compress&cs=tinysrgb&w=400'
								alt='Lemon Balm dessert'
							/>
							<h3>Lemon Balm</h3>
						</div>
						<div className='product-card'>
							<img
								src='https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=400'
								alt='Lemon spasm dessert'
							/>
							<h3>Lemon spasm</h3>
						</div>
						<div className='product-card'>
							<img
								src='https://images.pexels.com/photos/1028704/pexels-photo-1028704.jpeg?auto=compress&cs=tinysrgb&w=400'
								alt='Lemon Balms dessert'
							/>
							<h3>Lemon Balms</h3>
						</div>
					</div>
					<Link to='/products' className='btn-secondary'>
						View all products
					</Link>
				</div>
			</section>

			<section className='events-section'>
				<div className='events-container'>
					<div className='events-content'>
						<h2>Upcoming Events</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur. Tortor sem
							in consequat enim vitae pellentesque. Massa aliquam
							turpis pellentesque arcu varius et tincidunt. Purus
							eget sit tristique volutpat aliquet et. Pretium et
							eleifend mauris ultricies pharetra. Neque at
							consectetur bibendum ullamcorper libero et.
						</p>
						<Link to='/events' className='btn-primary'>
							View More Details
						</Link>
					</div>
					<div className='events-image'>
						<img
							src='https://images.pexels.com/photos/1120970/pexels-photo-1120970.jpeg?auto=compress&cs=tinysrgb&w=600'
							alt='Event cake display'
						/>
					</div>
				</div>
			</section>

			<section className='feedback-section'>
				<div className='section-container'>
					<h2>Our Customers Feedback</h2>
					<div className='feedback-card'>
						<p className='feedback-text'>
							" Lorem ipsum dolor sit amet consectetur. Tortor sem
							in consequat enim vitae pellentesque. Lorem ipsum
							dolor sit amet en a libero et..."
						</p>
						<p className='customer-name'>Georgia Green</p>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Home;
