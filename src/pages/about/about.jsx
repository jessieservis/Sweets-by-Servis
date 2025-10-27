import { Link } from 'react-router-dom';
import './about.css';

function About() {
	return (
		<div className='about-page'>
			<section className='about-hero-section'>
				<div className='about-hero-container'>
					<img
						src='https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=800'
						alt='Dessert showcase'
					/>
				</div>
			</section>

			<section className='about-section'>
				<div className='about-container'>
					<div className='about-content'>
						<h2>About Us</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur. Nulla arcu
							odio arcu et elementum ullamcorper in amet ultrices.
							Lorem ipsum dolor sit amet consectetur. Nulla arcu
							odio arcu et elementum ullamcorper in amet ultrices.
						</p>
					</div>
				</div>
			</section>

			<section className='mission-section'>
				<div className='mission-container'>
					<div className='mission-content'>
						<h2>Our Mission</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur. Neque tortor
							massa lorem dolor cras donec sed vitae tortor. Sit
							tellus commodo eget viverra. Tempus posuere leo
							augue et adipiscing volutpat egestas purus leo. Sit
							elementum pellentesque nunc quis ac. Feugiat lacinia
							pellentesque donec aliquam arcu pulvinar.
						</p>
					</div>
					<div className='mission-image'>
						<img
							src='https://images.pexels.com/photos/1028704/pexels-photo-1028704.jpeg?auto=compress&cs=tinysrgb&w=600'
							alt='Beautiful layered dessert'
						/>
					</div>
				</div>
			</section>

			<section className='promise-section'>
				<div className='promise-container'>
					<div className='promise-image'>
						<img
							src='https://images.pexels.com/photos/1120970/pexels-photo-1120970.jpeg?auto=compress&cs=tinysrgb&w=600'
							alt='Decorated cake'
						/>
					</div>
					<div className='promise-content'>
						<h2>Our Promise</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur. Neque tortor
							massa lorem dolor cras donec sed vitae tortor. Sit
							tellus commodo eget viverra. Tempus posuere leo
							augue et adipiscing volutpat egestas purus leo. Sit
							elementum pellentesque nunc quis ac. Feugiat lacinia
							pellentesque donec aliquam arcu pulvinar.
						</p>
					</div>
				</div>
			</section>

			<section className='cta-section'>
				<div className='cta-container'>
					<div className='cta-image'>
						<img
							src='https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=800'
							alt='Dessert on plate'
						/>
					</div>
					<div className='cta-content'>
						<h2>Want To Know More About Us?</h2>
						<Link to='/register' className='btn-cta'>
							Contact Us
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}

export default AboutPage;
