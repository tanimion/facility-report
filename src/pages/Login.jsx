import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Demo Logic: Check if it's the admin or a student email
    if (email === 'admin@school.edu' && password === 'admin123') {
        // In a real MERN app, you'd save the token here
        navigate('/admin-dashboard'); 
    } else if (email.endsWith('@school.edu') && password.length >= 6) {
        navigate('/dashboard');
    } else {
        setError('Invalid credentials. Hint: use any @school.edu email.');
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-header">
            <div className="auth-icon">🔐</div>
            <h2>Welcome Back</h2>
            <p>Sign in to access your account</p>
          </div>

          <div className="auth-body">
            {error && <div className="alert alert-error">{error}</div>}

            <form id="loginForm" className="auth-form" onSubmit={handleLogin}>
              <div className="form-group">
                <label htmlFor="email">
                  <span className="label-icon">✉️</span>
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="student@school.edu"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">
                  <span className="label-icon">🔒</span>
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <button type="submit" className="btn-submit">Sign In</button>
            </form>

            <div className="demo-credentials">
              <h4>Demo Credentials:</h4>
              <p><strong>Student:</strong> Any @school.edu email (pass: 6+ chars)</p>
              <p><strong>Admin:</strong> admin@school.edu / admin123</p>
            </div>

            <div className="auth-footer">
              <p>
                Don't have an account? <Link to="/register">Create Account</Link>
              </p>
            </div>
          </div>
        </div>
        <Link to="/" className="back-link">← Back to Home</Link>
      </div>
    </div>
  );
};

export default Login;