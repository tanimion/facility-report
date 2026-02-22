import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="about-page-wrapper">
      {/* Header */}
      <header className="header">
        <div className="container">
          <Link to="/" className="logo" style={{ textDecoration: 'none' }}>
            <div className="logo-icon">🏫</div>
            <div className="logo-text">
              <h1>Complaint Box</h1>
              <p>Campus Management System</p>
            </div>
          </Link>
          <nav className="nav">
            <Link to="/" className="btn-ghost">Home</Link>
            <Link to="/register" className="btn-outline">Sign Up</Link>
            <Link to="/login" className="btn-primary">Login</Link>
          </nav>
        </div>
      </header>

      {/* About Content */}
      <section style={{ padding: '80px 20px', background: 'white' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h1 className="section-title">About FacilityReport</h1>

          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '16px', color: '#333' }}>
              Our Mission
            </h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#666' }}>
              Complaint Box is dedicated to empowering students to improve their
              learning environment by providing an easy-to-use platform for
              reporting and tracking facility issues. We believe that every
              student deserves a safe, comfortable, and well-maintained campus.
            </p>
          </div>

          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '16px', color: '#333' }}>
              How It Works
            </h2>
            <div className="features-grid" style={{ marginTop: '30px' }}>
              <div className="feature-card">
                <div className="feature-icon">1️⃣</div>
                <h3>Create Account</h3>
                <p>Register with your email and student ID to get started</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">2️⃣</div>
                <h3>Submit Complaint</h3>
                <p>
                  Report facility issues with detailed descriptions and priority
                  levels
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">3️⃣</div>
                <h3>Track Progress</h3>
                <p>Monitor your complaint status from pending to resolved</p>
              </div>
            </div>
          </div>

          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '16px', color: '#333' }}>
              Key Features
            </h2>
            <ul
              style={{
                fontSize: '1.1rem',
                lineHeight: '2',
                color: '#666',
                marginLeft: '20px',
              }}
            >
              <li>✓ Easy complaint submission with categorization</li>
              <li>✓ Priority levels (Low, Medium, High, Urgent)</li>
              <li>
                ✓ Real-time status tracking (Pending, In Progress, Resolved)
              </li>
              <li>✓ Edit and delete your pending complaints</li>
              <li>✓ Secure authentication system</li>
              <li>✓ Admin dashboard for facility management</li>
              <li>✓ Mobile-responsive design</li>
            </ul>
          </div>

          <div
            style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              padding: '40px',
              borderRadius: '16px',
              textAlign: 'center',
            }}
          >
            <h2 style={{ fontSize: '2rem', marginBottom: '16px' }}>
              Ready to Get Started?
            </h2>
            <p style={{ fontSize: '1.1rem', marginBottom: '30px', opacity: 0.95 }}>
              Join our community and help make our campus better
            </p>
            <div
              style={{
                display: 'flex',
                gap: '16px',
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              <Link to="/register" className="btn-white">Create Account</Link>
              <Link
                to="/login"
                className="btn-outline"
                style={{ borderColor: 'white', color: 'white' }}
              >
                Sign In
              </Link>
            </div>
          </div>

          <div
            style={{
              marginTop: '60px',
              padding: '30px',
              background: '#f8f9fa',
              borderRadius: '12px',
            }}
          >
            <h2 style={{ fontSize: '1.5rem', marginBottom: '16px', color: '#333' }}>
              Contact Information
            </h2>
            <p style={{ color: '#666', lineHeight: '1.8' }}>
              <strong>Email:</strong> support@school.edu<br />
              <strong>Phone:</strong> (555) 123-4567<br />
              <strong>Office:</strong> Building A, Room 101<br />
              <strong>Hours:</strong> Monday - Friday, 8:00 AM - 5:00 PM
            </p>
          </div>
        </div>
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
              <h4>Quick Links</h4>
              <ul>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/register">Sign Up</Link></li>
                <li><Link to="/login">Login</Link></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Contact</h4>
              <ul>
                <li>Email: support@school.edu</li>
                <li>Phone: (555) 123-4567</li>
                <li>Office: Building A, Room 101</li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2026 Complaint Box . All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;