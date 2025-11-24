import './products.css';

function Products() {
	const scrollToSection = (id) => {
		const el = document.getElementById(id)
		el.scrollIntoView({ behavior: 'smooth', block: 'start' })
	}
	return (
		<div className='products-page'>
			<section className='products-hero-section'>
				<div className='products-hero-container'>
					<h1>See the Sweets</h1>
					<div className='category-tabs'>
						<button
							className='tab-btn'
							onClick={() => scrollToSection('Cookies')}
						>
							Cookies
						</button>
						<button
							className='tab-btn'
							onClick={() => scrollToSection('Cupcakes')}
						>
							Cupcakes
						</button>
						<button
							className='tab-btn'
							onClick={() => scrollToSection('Rice Crispy Treats')}
						>
							Rice Crispy Treats
						</button>
					</div>
				</div>
			</section>

			<section
				className='category-section alt-bg'
				id='Cookies'
			>
				<div className='category-container'>
					<h2>Cookies</h2>
					<div className='products-display'>
						<div className='product-image-large'>
							<img
								src='\chocolateChipCookies.jpg'
								alt='Chocolate chip cookies'
							/>
							<div className='product-label'>
								<h3>Chocolate Chip Cookies</h3>
							</div>
						</div>
						<div className='product-image-large'>
							<img
								src='\peanutButterCookies.jpg'
								alt='Peanut butter cookies'
							/>
							<div className='product-label'>
								<h3>Peanut Butter Cookies</h3>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section
				className='category-section'
				id='Cupcakes'
			>
				<div className='category-container'>
					<h2>Cupcakes</h2>
					<div className='products-display'>
						<div className='product-image-large'>
							<img
								src='\cookiesAndCreamCupcakes.jpg'
								alt='Cookies and Cream Cupcakes'
							/>
							<div className='product-label'>
								<h3>Cookies and Cream Cupcakes</h3>
							</div>
						</div>
						<div className='product-image-large'>
							<img
								src='\StrawberryCrunchCupcakes.jpg'
								alt='Strawberry Crunch Cupcakes'
							/>
							<div className='product-label'>
								<h3>Strawberry Crunch Cupcakes</h3>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section
				className='category-section alt-bg'
				id='Rice Crispy Treats'
			>
				<div className='category-container'>
					<h2>Rice Crispy Treats</h2>
					<div className='products-display'>
						<div className='product-image-large'>
							<img
								src='\PBChocolateRiceCrispyTreat.jpg'
								alt='Peanut Butter Chocolate Rice Crispy Treat'
							/>
							<div className='product-label'>
								<h3>Peanut Butter Chocolate Rice Crispy Treat</h3>
							</div>
						</div>
						<div className='product-image-large'>
							<img
								src='\riceCrispyTreat.jpg'
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
