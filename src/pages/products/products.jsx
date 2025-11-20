import './products.css';

function Products() {
	return (
		<div className='products-page'>
			<section className='products-hero-section'>
				<div className='products-hero-container'>
					<h1>See the Sweets</h1>
					<div className='category-tabs'>
						<button className='tab-btn active'>Cookies</button>
						<button className='tab-btn'>Cupcakes</button>
						<button className='tab-btn'>Rice Crispy Treats</button>
					</div>
				</div>
			</section>

			<section className='category-section'>
				<div className='category-container'>
					<h2>Cookies</h2>
					<div className='products-display'>
						<div className='product-image-large'>
							<img
								src='public\chocolateChipCookies.jpg'
								alt='Chocolate chip cookies'
							/>
							<div className='product-label'>
								<h3>Chocolate Chip Cookies</h3>
							</div>
						</div>
						<div className='product-image-large'>
							<img
								src='public\peanutButterCookies.jpg'
								alt='Peanut butter cookies'
							/>
							<div className='product-label'>
								<h3>Peanut Butter Cookies</h3>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className='category-section alt-bg'>
				<div className='category-container'>
					<h2>Cupcakes</h2>
					<div className='products-display'>
						<div className='product-image-large'>
							<img
								src='public\cookiesAndCreamCupcakes.jpg'
								alt='Cookies and Cream Cupcakes'
							/>
							<div className='product-label'>
								<h3>Cookies and Cream Cupcakes</h3>
							</div>
						</div>
						<div className='product-image-large'>
							<img
								src='public\StrawberryCrunchCupcakes.jpg'
								alt='Strawberry Crunch Cupcakes'
							/>
							<div className='product-label'>
								<h3>Strawberry Crunch Cupcakes</h3>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className='category-section alt-bg'>
				<div className='category-container'>
					<h2>Rice Crispy Treats</h2>
					<div className='products-display'>
						<div className='product-image-large'>
							<img
								src='public\PBChocolateRiceCrispyTreat.jpg'
								alt='Peanut Butter Chocolate Rice Crispy Treat'
							/>
							<div className='product-label'>
								<h3>Peanut Butter Chocolate Rice Crispy Treat</h3>
							</div>
						</div>
						<div className='product-image-large'>
							<img
								src='public\riceCrispyTreat.jpg'
								alt='Classic Rice Crispy Treat'
							/>
							<div className='product-label'>
								<h3>Classic Rice Crispy Treat</h3>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Products;
