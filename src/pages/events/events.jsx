import './events.css';
import React, { useEffect, useRef, useState } from 'react'
import EVENTS from './events.json'

function Calendar({ events, onStarClick }) {
	const [currentDate, setCurrentDate] = useState(new Date())

	const year = currentDate.getFullYear()
	const month = currentDate.getMonth() // 0-based

	// Get number of days in month
	const daysInMonth = new Date(year, month + 1, 0).getDate()
	const firstDay = new Date(year, month, 1).getDay()

	// Map days -> events indices (event can fall on same day)
	const eventsByDay = {}
	events.forEach((ev, idx) => {
		const d = new Date(ev.date)
		if (d.getFullYear() === year && d.getMonth() === month) {
			const dayNum = d.getDate()
			if (!eventsByDay[dayNum]) eventsByDay[dayNum] = []
			eventsByDay[dayNum].push(idx)
		}
	})

	const dayCells = []
	// empty cells before first day
	for (let i = 0; i < firstDay; i++) dayCells.push(null)
	for (let d = 1; d <= daysInMonth; d++) dayCells.push(d)

	function prevMonth() {
		setCurrentDate(new Date(year, month - 1, 1))
	}

	function nextMonth() {
		setCurrentDate(new Date(year, month + 1, 1))
	}

	return (
		<div className='calendar'>
			<div className='calendar-header'>
				<div className='month-nav'>
					<button
						className='month-nav-btn prev'
						onClick={prevMonth}
						aria-label='Previous month'
					>
						‹
					</button>
					<h3 className='month-title'>
						{currentDate.toLocaleString(undefined, { month: 'long' })} {year}
					</h3>
					<button
						className='month-nav-btn next'
						onClick={nextMonth}
						aria-label='Next month'
					>
						›
					</button>
				</div>
			</div>

			<div className='calendar-grid'>
				{['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((w) => (
					<div
						key={w}
						className='calendar-weekday'
					>
						{w}
					</div>
				))}

				{dayCells.map((d, i) => (
					<div
						key={i}
						className={'day-cell' + (d ? '' : ' empty')}
					>
						{d && <div className='day-number'>{d}</div>}
						{d && eventsByDay[d] && (
							<div className='stars'>
								{eventsByDay[d].map((eventIdx) => (
									<button
										key={eventIdx}
										className='star'
										onClick={() => onStarClick(eventIdx)}
										title={events[eventIdx].title}
										aria-label={`Open ${events[eventIdx].title}`}
									>
										★
									</button>
								))}
							</div>
						)}
					</div>
				))}
			</div>
		</div>
	)
}

function Events() {
	const [activeIndex, setActiveIndex] = useState(0)
	const carouselRef = useRef(null)

	// When activeIndex changes, scroll carousel item into view
	useEffect(() => {
		const container = carouselRef.current
		if (!container) return
		const child = container.children[activeIndex]
		if (child && typeof child.scrollIntoView === 'function') {
			child.scrollIntoView({
				behavior: 'smooth',
				inline: 'center',
				block: 'nearest',
			})
		}
	}, [activeIndex])

	return (
		<div className='events-page'>
			<section className='events-hero'>
				<div className='events-hero-container'>
					<h1>Our Upcoming Events</h1>
				</div>
			</section>

			<section className='events-calendar-section'>
				<div className='events-list-container'>
					<Calendar
						events={EVENTS}
						onStarClick={(idx) => setActiveIndex(idx)}
					/>
				</div>
			</section>

			<section className='events-carousel-section'>
				<div className='events-list-container'>
					<h2 className='carousel-title'>Events</h2>
					<div
						className='carousel'
						ref={carouselRef}
					>
						{EVENTS.map((ev, idx) => (
							<div
								key={ev.id}
								className={
									'carousel-item' + (idx === activeIndex ? ' active' : '')
								}
								onClick={() => setActiveIndex(idx)}
							>
								<img
									src={ev.img}
									alt={ev.title}
								/>
								<div className='carousel-item-info'>
									<h3>{ev.title}</h3>
									<p className='meta'>
										{new Date(ev.date).toLocaleDateString()} • {ev.time}
									</p>
									<p className='desc'>{ev.description}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className='event-detail-section'>
				<div className='event-detail-container'>
					<div className='event-detail-image'>
						<img
							src={EVENTS[activeIndex].img}
							alt={EVENTS[activeIndex].title}
						/>
					</div>
					<div className='event-detail-content'>
						<h2>{EVENTS[activeIndex].title}</h2>
						<p>{EVENTS[activeIndex].description}</p>
						<div className='event-details'>
							<p>
								<strong>Event Date:</strong>{' '}
								{new Date(EVENTS[activeIndex].date).toLocaleDateString()}
							</p>
							<p>
								<strong>Event Time:</strong> {EVENTS[activeIndex].time}
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Events;
