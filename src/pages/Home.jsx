import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="landing-page-wrapper">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="logo">
            <div className="logo-icon">🏫</div>
            <div className="logo-text">
              <h1>Complaint Box</h1>
              <p>Campus Management System</p>
            </div>
          </div>
          <nav className="nav">
            <Link to="/about" className="btn-ghost">About</Link>
            <Link to="/register" className="btn-outline">Sign Up</Link>
            <Link to="/login" className="btn-primary">Login</Link>
          </nav>
        </div>
      </header>

      <section className="landing-page">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <div className="hero-badge">
              Making Campus Better, One Report at a Time
            </div>
            <h1 className="hero-title">
              Report • Track • Resolve <br />Your voice. Real action.
            </h1>
            <p className="hero-description">
              Your voice matters in creating a better learning environment. Submit
              facility complaints and track their resolution in real-time.
            </p>
            <div className="hero-buttons">
              <Link to="/register" className="btn-large btn-primary">
                Get Started →
              </Link>
              <Link to="/about" className="btn-large btn-outline"> Learn More </Link>
            </div>
          </div>
        </section>

        <section className="campus-information">
          <div className="information-box">
            <h2>5,000+</h2>
            Active Students
          </div>
          <div className="information-box">
            <h2>1,200+</h2>
            Reports Resolved
          </div>
          <div className="information-box-hr">
            <h2>48hrs</h2>
            Average Resolution Time
          </div>
        </section>

        {/* Features Section */}
        <section className="features">
          <div className="container">
            <h2 className="section-title">Why Choose this Facility?</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">📝</div>
                <h3>Easy Reporting</h3>
                <p>Submit complaints in seconds with our intuitive form</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">📊</div>
                <h3>Track Progress</h3>
                <p>Monitor your complaint status from pending to resolved</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">⚡</div>
                <h3>Fast Response</h3>
                <p>Priority system ensures urgent issues get immediate attention</p>
              </div>
              {/* ... You can repeat other cards here ... */}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta">
          <div className="container">
            <h2 className="cta-title">Ready to Make a Difference?</h2>
            <p className="cta-description">
              Join thousands of students who are helping improve our campus facilities
            </p>
            <Link to="/register" className="btn-large btn-white">
              Start Reporting Now →
            </Link>
          </div>
        </section>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-section">
              <h3>Complaint Box</h3>
              <p>Making campus facilities better, one report at a time.</p>
            </div>
            <div className="footer-section">
              <h4>Contact</h4>
              <ul>
                <li>Email: support@school.edu</li>
                <li>Phone: (555) 123-4567</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 Complaint Box. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;