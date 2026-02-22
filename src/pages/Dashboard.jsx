import React, { useState } from 'react';
import demoData from '../data/demoData.json';

const Dashboard = () => {
  const [complaints, setComplaints] = useState(demoData.complaints);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to handle "Submit" from the form
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you'd add the new complaint to the array here
    setIsModalOpen(false);
    alert("Complaint Submitted Successfully!");
  };

  return (
    <div className="dashboard-page">
      {/* HEADER SECTION */}
      <header className="header">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="logo">
            <span className="logo-icon">🏫</span>
            <h1>FacilityReport</h1>
          </div>
          <button className="btn-ghost" onClick={() => window.location.href='/'}>Logout</button>
        </div>
      </header>

      <div className="container">
        <div className="dashboard-header" style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h2>Your Reports</h2>
          <button className="btn-primary" onClick={() => setIsModalOpen(true)}>
            + Report Issue
          </button>
        </div>

        {/* COMPLAINTS LIST */}
        <div className="complaints-grid" style={{ marginTop: '60px' }}>
          {complaints.map(item => (
            <div key={item.id} className="complaint-card card shadow-sm p-3 mb-3 bg-white rounded" style={{ marginTop: '20px' }}>
              <div className="d-flex justify-content-between">
                <h5>{item.facilityType}</h5>
                <span className={`badge status-${item.status}`}>{item.status}</span>
              </div>
              <p className="text-muted">{item.location}</p>
              <p>{item.description}</p>
              <div className={`priority-tag p-${item.priority.toLowerCase()}`}>
                Priority: {item.priority}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* INTERACTIVE MODAL */}
      {isModalOpen && (
        <div className="modal-overlay" style={overlayStyle}>
          <div className="modal-content card p-4" style={modalStyle}>
            <h3>Submit New Report</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <label>Facility Type</label>
                <select className="form-control">
                  <option>Classroom</option>
                  <option>Laboratory</option>
                  <option>Restroom</option>
                </select>
              </div>
              <div className="form-group mb-3">
                <label>Description</label>
                <textarea className="form-control" placeholder="What's wrong?"></textarea>
              </div>
              <div className="d-flex gap-2">
                <button type="submit" className="btn-primary">Submit</button>
                <button type="button" className="btn-secondary" onClick={() => setIsModalOpen(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

// Simple inline styles for the modal overlay if not in your CSS
const overlayStyle = {
  position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
  backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000
};
const modalStyle = { width: '400px', backgroundColor: '#fff' };

export default Dashboard;