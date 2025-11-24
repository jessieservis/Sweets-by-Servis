import './events.css';
import React, { useEffect, useRef, useState, useMemo } from 'react'
import EVENTS from './events.json'
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'

// helper: compare dates by year/month/day
function sameDay(a, b) {
	return (
		a.getFullYear() === b.getFullYear() &&
		a.getMonth() === b.getMonth() &&
		a.getDate() === b.getDate()
	)
}

function Calendar({ events, onStarClick }) {
	// build a list of Date objects for days that have events
	const eventDates = useMemo(
		() => events.map((ev) => new Date(ev.date)),
		[events]
	)

	// find events indices for a given day
	function eventsForDay(day) {
		if (!day) return []
		const res = []
		events.forEach((ev, idx) => {
			if (sameDay(new Date(ev.date), day)) res.push(idx)
		})
		return res
	}

	return (
		<div className='calendar'>
			<div className='calendar-header'>
				<h3>Events Calendar</h3>
			</div>
			<DayPicker
				mode='single'
				onDayClick={(day) => {
					const idxs = eventsForDay(day)
					if (idxs.length) onStarClick(idxs[0])
				}}
				modifiers={{ hasEvent: eventDates }}
				modifiersClassNames={{ hasEvent: 'has-event' }}
			/>
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

export default Events
