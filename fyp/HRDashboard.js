import React, { useState } from 'react';
import './SysAdminDashboard.css'; // Keep the same styling if it fits

export default function HRDashboard() {
  const [activeTab, setActiveTab] = useState('My Dashboard');
  const [notificationTitle, setNotificationTitle] = useState('');
  const [notificationMessage, setNotificationMessage] = useState('');

  const navItems = [
    { name: 'My Dashboard', icon: '🏠' },
    { name: 'View Attendance Report', icon: '📅' },
    { name: 'Account Management', icon: '👥' },
    { name: 'Submit Support Ticket', icon: '🎫' },
    { name: 'My Notifications', icon: '🔔' },
    { name: 'Register New User', icon: '👤' },
  ];

  const handleCreateNotification = (e) => {
    e.preventDefault();
    console.log('Creating notification:', { title: notificationTitle, message: notificationMessage });
    alert('Notification created successfully!');
    setNotificationTitle('');
    setNotificationMessage('');
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'My Dashboard':
        return (
          <div className="card">
            <h2>Welcome to the Human Resource Administrator Dashboard</h2>
            <p>Your HR overview and key information about employee attendance will appear here.</p>
          </div>
        );
      case 'View Attendance Report':
        return (
          <div className="card">
            <h2>Attendance Report</h2>
            <p>Detailed reports of employee attendance can be viewed here.</p>
          </div>
        );
      case 'Submit Support Ticket':
        return (
          <div className="card">
            <h2>Submit Support Ticket</h2>
            <form onSubmit={handleCreateNotification}>
              <div className="form-group">
                <label htmlFor="title">Ticket Title</label>
                <input
                  id="title"
                  type="text"
                  value={notificationTitle}
                  onChange={(e) => setNotificationTitle(e.target.value)}
                  placeholder="Enter ticket title"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Description</label>
                <textarea
                  id="message"
                  value={notificationMessage}
                  onChange={(e) => setNotificationMessage(e.target.value)}
                  placeholder="Enter description"
                  required
                />
              </div>
              <button type="submit" className="btn-primary">Submit Ticket</button>
            </form>
          </div>
        );
      case 'My Notifications':
        return (
          <div className="card">
            <h2>Notifications</h2>
            <p>Your recent notifications will be displayed here.</p>
          </div>
        );
      case 'Register New User':
        return (
          <div className="card">
            <h2>Register New User</h2>
            <button
              className="btn-primary"
              onClick={() => window.open('/register', '_blank')}
            >
              Proceed to Register New User
            </button>
          </div>
        );
      case 'Account Management':
        return (
          <div className="card">
            <h2>Account Management</h2>
            <p>Manage employee accounts and permissions.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <div className="sidebar-header">
          <h1>HR Dashboard</h1>
        </div>
        <nav className="sidebar-nav">
          {navItems.map((item) => (
            <button
              key={item.name}
              className={`nav-item ${activeTab === item.name ? 'active' : ''}`}
              onClick={() => setActiveTab(item.name)}
            >
              <span className="nav-icon">{item.icon}</span>
              {item.name}
            </button>
          ))}
          <button className="nav-item logout" onClick={() => alert('Logout functionality to be implemented')}>
            <span className="nav-icon">🚪</span>
            Logout
          </button>
        </nav>
      </div>
      <div className="main-content">
        <h2 className="page-title">{activeTab}</h2>
        {renderContent()}
      </div>
    </div>
  );
}
