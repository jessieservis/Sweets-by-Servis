import './events.css';
import React, { useEffect, useRef, useState, useMemo } from 'react'
import EVENTS from './events.json'
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'

// helper: compare dates by year/month/day
function sameDay(a, b) {
	return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate()
}

function Calendar({ events, onDaySelect }) {
	const eventDates = useMemo(() => events.map((ev) => new Date(ev.date)), [events])

	function eventsForDay(day) {
		if (!day) return []
		const res = []
		events.forEach((ev, idx) => {
			if (sameDay(new Date(ev.date), day)) res.push(idx)
		})
		return res
	}

	return (
		<div className="calendar">
			<div className="calendar-header">
				<h3>Events Calendar</h3>
			</div>
			<DayPicker
				mode="single"
				onDayClick={(day) => {
					const idxs = eventsForDay(day)
					if (idxs.length) onDaySelect(idxs[0])
				}}
				modifiers={{ hasEvent: eventDates }}
				modifiersClassNames={{ hasEvent: 'has-event' }}
			/>
		</div>
	)
}

export default function Events() {
	const [activeIndex, setActiveIndex] = useState(0)
	const carouselRef = useRef(null)
	const visibleCount = 5 // Number of items to show (center + 2 on each side)

	// Helper to get events centered around activeIndex
	const getDisplayWindow = (centerIdx) => {
		const halfWindow = Math.floor(visibleCount / 2)
		const window = []
		for (let i = -halfWindow; i <= halfWindow; i++) {
			const idx = (centerIdx + i + EVENTS.length) % EVENTS.length
			window.push({ ...EVENTS[idx], displayIdx: i })
		}
		return window
	}

	const [displayedEvents, setDisplayedEvents] = useState(() =>
		getDisplayWindow(0)
	)

	const scrollCarousel = (direction) => {
		let newIndex
		if (direction === 'left') {
			newIndex = activeIndex > 0 ? activeIndex - 1 : EVENTS.length - 1
		} else {
			newIndex = activeIndex < EVENTS.length - 1 ? activeIndex + 1 : 0
		}
		setActiveIndex(newIndex)
		setDisplayedEvents(getDisplayWindow(newIndex))
	}

	useEffect(() => {
		const container = carouselRef.current
		if (!container) return
		// Scroll to show the active item in view
		const activeChild = container.querySelector('.carousel-item.active')
		if (activeChild && typeof activeChild.scrollIntoView === 'function') {
			activeChild.scrollIntoView({
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

			<section className='events-main-section'>
				<div className='events-list-container events-main'>
					<div className='events-main-left'>
						<Calendar
							events={EVENTS}
							onDaySelect={(idx) => setActiveIndex(idx)}
						/>
					</div>

					<div className='events-main-right'>
						<h2 className='carousel-title'>Events</h2>
						<div className='carousel-wrapper'>
							<button
								className='carousel-arrow carousel-arrow-left'
								onClick={() => scrollCarousel('left')}
								aria-label='Previous event'
							>
								‹
							</button>
							<div
								className='carousel'
								ref={carouselRef}
							>
								{displayedEvents.map((ev, idx) => {
									const isCenterItem = ev.displayIdx === 0
									const eventOriginalIndex = EVENTS.findIndex(
										(e) => e.id === ev.id
									)
									return (
										<div
											key={`${ev.id}-${idx}`}
											className={
												'carousel-item' + (isCenterItem ? ' active' : '')
											}
											onClick={() => {
												setActiveIndex(eventOriginalIndex)
												setDisplayedEvents(getDisplayWindow(eventOriginalIndex))
											}}
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
									)
								})}
							</div>
							<button
								className='carousel-arrow carousel-arrow-right'
								onClick={() => scrollCarousel('right')}
								aria-label='Next event'
							>
								›
							</button>
						</div>
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
