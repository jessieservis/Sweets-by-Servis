import { Dropdown } from 'react-day-picker'
import './registration.css'

function Registration() {
	const handleSubmit = (e) => {
		e.preventDefault()

		// Clear any previous error messages
		const errorSpans = document.querySelectorAll('.error-message')
		errorSpans.forEach((span) => (span.textContent = ''))

		// Get values entered by user
		const email = document.getElementById('email').value
		const phone = document.getElementById('phone').value
		const firstName = document.getElementById('first name').value
		const lastName = document.getElementById('last name').value
		const favoriteDessert = document.getElementById('favorite-dessert').value
		const notifyEmail = document.getElementById('notify-email').checked
		const notifyPhone = document.getElementById('notify-phone').checked
		const password = document.getElementById('password').value

		// Regular expressions for validity testing
		const emailPattern = /^[\w\.\-]+@[\w\.\-]+\.[a-zA-Z]+$/
		const phonePattern = /^\d{3}-\d{3}-\d{4}$/

		// Check user entries for validity
		let isValid = true
		if (email === '' || !emailPattern.test(email)) {
			isValid = false
			document.getElementById('email').nextElementSibling.textContent =
				'Please enter a valid email.'
		}
		if (phone === '' || !phonePattern.test(phone)) {
			isValid = false
			document.getElementById('phone').nextElementSibling.textContent =
				'Please enter a phone number in NNN-NNN-NNNN format.'
		}
		if (firstName === '') {
			isValid = false
			document.getElementById('first name').nextElementSibling.textContent =
				'Please enter your first name.'
		}
		if (lastName === '') {
			isValid = false
			document.getElementById('last name').nextElementSibling.textContent =
				'Please enter your last name.'
		}
		if (favoriteDessert === '') {
			isValid = false
			document.getElementById(
				'favorite-dessert'
			).nextElementSibling.textContent = 'Please select your favorite dessert.'
		}
		if (!notifyEmail && !notifyPhone) {
			isValid = false
			document.querySelector('.notification-error').textContent =
				'Please select at least one notification method.'
		}
		if (password === '' || password.length < 8) {
			isValid = false
			document.getElementById('password').nextElementSibling.textContent =
				'Please enter a password with at least 8 characters.'
		}

		if (isValid) {
			// Save to session storage (store after successful validation)
			sessionStorage.setItem('email', email)
			sessionStorage.setItem('phone', phone)
			sessionStorage.setItem('firstName', firstName)
			sessionStorage.setItem('lastName', lastName)
			sessionStorage.setItem('favoriteDessert', favoriteDessert)
			sessionStorage.setItem('notifyEmail', notifyEmail)
			sessionStorage.setItem('notifyPhone', notifyPhone)
			sessionStorage.setItem('password', password)

			// Submit the form or show success message
			alert('Registration successful! Your information has been saved.')
			e.target.reset()
		}

		document.getElementById('email').focus()
	}

	return (
		<div className='registration-page'>
			<section className='registration-section'>
				<div className='registration-container'>
					<div className='registration-form-wrapper'>
						<h1>Account Registration</h1>
						<p className='registration-subtitle'>
							Learn about our events, new menu items, and special promotions!
						</p>
						<form
							onSubmit={handleSubmit}
							className='registration-form'
						>
							<div className='form-group'>
								<label htmlFor='email'>Email</label>
								<input
									type='email'
									id='email'
									name='email'
									placeholder='janesmith@email.com'
								/>
								<span className='error-message'></span>
								<label htmlFor='phone'>Phone Number</label>
								<input
									type='tel'
									id='phone'
									name='phone'
									placeholder='012-345-6789'
								/>
							<span className='error-message'></span>
							<div className='name-row'>
								<div className='form-field'>
									<label htmlFor='first name'>First Name</label>
									<input
										type='given-name'
										id='first name'
										name='first name'
										placeholder='Jane'
									/>
									<span className='error-message'></span>
								</div>
								<div className='form-field'>
									<label htmlFor='last name'>Last Name</label>
									<input
										type='family-name'
										id='last name'
										name='last name'
										placeholder='Doe'
									/>
									<span className='error-message'></span>
								</div>
							</div>
							<label htmlFor='favorite-dessert'>Favorite Dessert</label>
								<select
									id='favorite-dessert'
									name='favorite-dessert'
								>
									<option value=''>Select a dessert...</option>
									<option value='cookies'>Cookies</option>
									<option value='rice-crispy-treats'>Rice Crispy Treats</option>
									<option value='cupcakes'>Cupcakes</option>
								</select>

								<span className='error-message'></span>
								<label>How would you like to be notified?</label>
								<div className='checkbox-group'>
									<label className='checkbox-label'>
										<input
											type='checkbox'
											id='notify-email'
											name='notify-email'
										/>
										<span>Email</span>
									</label>
									<label className='checkbox-label'>
										<input
											type='checkbox'
											id='notify-phone'
											name='notify-phone'
										/>
										<span>Phone</span>
									</label>
								</div>
								<span className='error-message notification-error'></span>
								<label htmlFor='password'>Password</label>
								<input
									type='new-password'
									id='password'
									name='password'
									placeholder='********'
								/>
								<span className='error-message'></span>
							</div>
							<button
								type='submit'
								className='btn-submit'
							>
								Submit
							</button>
						</form>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Registration
