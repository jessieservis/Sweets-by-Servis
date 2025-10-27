import './RegistrationPage.css';

function RegistrationPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="registration-page">
      <section className="registration-section">
        <div className="registration-container">
          <div className="registration-form-wrapper">
            <h1>Email Registration</h1>
            <p className="registration-subtitle">Get our new menu & promotions via email! Will only send you MAX once a MONTH.</p>
            <form onSubmit={handleSubmit} className="registration-form">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  placeholder="" 
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  placeholder="" 
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  placeholder="" 
                  required 
                />
              </div>
              <button type="submit" className="btn-submit">Submit</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default RegistrationPage;
