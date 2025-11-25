import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './confirmation.css'

function Confirmation() {
	const navigate = useNavigate()
	const [profileData, setProfileData] = useState({
		email: '',
		phone: '',
		firstName: '',
		lastName: '',
		favoriteDessert: '',
		notifyEmail: false,
		notifyPhone: false,
	})

	useEffect(() => {
		// Retrieve data from session storage
		const email = sessionStorage.getItem('email')
		const phone = sessionStorage.getItem('phone')
		const firstName = sessionStorage.getItem('firstName')
		const lastName = sessionStorage.getItem('lastName')
		const favoriteDessert = sessionStorage.getItem('favoriteDessert')
		const notifyEmail = sessionStorage.getItem('notifyEmail') === 'true'
		const notifyPhone = sessionStorage.getItem('notifyPhone') === 'true'

		// Check if data exists
		if (!email || !firstName || !lastName) {
			// Redirect to registration if no data found
			navigate('/registration')
			return
		}

		setProfileData({
			email,
			phone,
			firstName,
			lastName,
			favoriteDessert,
			notifyEmail,
			notifyPhone,
		})
	}, [navigate])

	const formatDessertName = (dessert) => {
		if (!dessert) return ''
		return dessert
			.split('-')
			.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
			.join(' ')
	}

	const handleEditProfile = () => {
		navigate('/registration')
	}

	return (
		<div className='confirmation-page'>
			<section className='confirmation-section'>
				<div className='confirmation-container'>
					<div className='confirmation-wrapper'>
						<div className='confirmation-icon'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							>
								<path d='M22 11.08V12a10 10 0 1 1-5.93-9.14'></path>
								<polyline points='22 4 12 14.01 9 11.01'></polyline>
							</svg>
						</div>
						<h1>Registration Complete!</h1>
						<p className='confirmation-subtitle'>
							Thank you for joining our community. Your profile has been
							successfully created.
						</p>

						<div className='profile-details'>
							<h2>Your Profile Information</h2>

							<div className='detail-group'>
								<div className='detail-item'>
									<label>Email</label>
									<p>{profileData.email}</p>
								</div>

								<div className='detail-item'>
									<label>Phone Number</label>
									<p>{profileData.phone}</p>
								</div>
							</div>

							<div className='detail-group name-group'>
								<div className='detail-item'>
									<label>First Name</label>
									<p>{profileData.firstName}</p>
								</div>

								<div className='detail-item'>
									<label>Last Name</label>
									<p>{profileData.lastName}</p>
								</div>
							</div>

							<div className='detail-group'>
								<div className='detail-item'>
									<label>Favorite Dessert</label>
									<p>{formatDessertName(profileData.favoriteDessert)}</p>
								</div>
							</div>

							<div className='detail-group'>
								<div className='detail-item'>
									<label>Notification Preferences</label>
									<div className='notification-tags'>
										{profileData.notifyEmail && (
											<span className='notification-tag'>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													width='16'
													height='16'
													viewBox='0 0 24 24'
													fill='none'
													stroke='currentColor'
													strokeWidth='2'
													strokeLinecap='round'
													strokeLinejoin='round'
												>
													<path d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z'></path>
													<polyline points='22,6 12,13 2,6'></polyline>
												</svg>
												Email
											</span>
										)}
										{profileData.notifyPhone && (
											<span className='notification-tag'>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													width='16'
													height='16'
													viewBox='0 0 24 24'
													fill='none'
													stroke='currentColor'
													strokeWidth='2'
													strokeLinecap='round'
													strokeLinejoin='round'
												>
													<path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z'></path>
												</svg>
												Phone
											</span>
										)}
									</div>
								</div>
							</div>
						</div>

						<div className='action-buttons'>
							<button
								onClick={handleEditProfile}
								className='btn-edit'
							>
								Edit Profile
							</button>
							<button
								onClick={() => navigate('/')}
								className='btn-home'
							>
								Go to Home
							</button>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Confirmation
