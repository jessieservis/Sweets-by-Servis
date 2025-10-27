import './EventsPage.css';

function EventsPage() {
  return (
    <div className="events-page">
      <section className="events-hero">
        <div className="events-hero-container">
          <h1>Our Upcoming Events</h1>
        </div>
      </section>

      <section className="events-list-section">
        <div className="events-list-container">
          <div className="event-cards-grid">
            <div className="event-card">
              <img src="https://images.pexels.com/photos/887853/pexels-photo-887853.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Event 1" />
              <h3>Event 1</h3>
            </div>
            <div className="event-card">
              <img src="https://images.pexels.com/photos/1120970/pexels-photo-1120970.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Event 2" />
              <h3>Event 2</h3>
            </div>
            <div className="event-card">
              <img src="https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Event 3" />
              <h3>Event 3</h3>
            </div>
            <div className="event-card">
              <img src="https://images.pexels.com/photos/1028704/pexels-photo-1028704.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Event 4" />
              <h3>Event 4</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="event-detail-section">
        <div className="event-detail-container">
          <div className="event-detail-image">
            <img src="https://images.pexels.com/photos/1120970/pexels-photo-1120970.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Featured event cake" />
          </div>
          <div className="event-detail-content">
            <h2>Event 1</h2>
            <p>Lorem ipsum dolor sit amet consectetur. Tortor sem in consequat enim vitae pellentesque. Massa aliquam turpis pellentesque arcu varius et tincidunt. Purus eget sit tristique volutpat aliquet et. Pretium et eleifend mauris ultricies pharetra. Neque at consectetur bibendum ullamcorper libero et.</p>
            <div className="event-details">
              <p><strong>Event Date:</strong> MM/DD/YYYY</p>
              <p><strong>Event Time:</strong> 9:00AM - 1:00 AM</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default EventsPage;
