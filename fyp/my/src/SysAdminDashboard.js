import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SysAdminDashboard.css';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('Home');
  const [notificationTitle, setNotificationTitle] = useState('');
  const [notificationMessage, setNotificationMessage] = useState('');
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    password: ''
  });

  const navItems = [
    { name: 'Home', icon: '🏠' },
    { name: 'Account Management', icon: '👥' },
    { name: 'View Tickets', icon: '🎫' },
    { name: 'View Attendance Report', icon: '📅' },
    { name: 'Update Model', icon: '🔄' },
    { name: 'Create Notifications', icon: '🔔' },
    { name: 'Register New User', icon: '👤' },  // New nav item
  ];

  const handleCreateNotification = (e) => {
    e.preventDefault();
    console.log('Creating notification:', { title: notificationTitle, message: notificationMessage });
    alert('Notification created successfully!');
    setNotificationTitle('');
    setNotificationMessage('');
  };

  const handleRegisterNewUser = (e) => {
    e.preventDefault();
    console.log('Registering new user:', newUser);
    alert('User registered successfully!');
    setNewUser({ name: '', email: '', password: '' });
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'Home':
        return (
          <div className="card">
            <h2>Welcome to the System Administrator Dashboard</h2>
            <p>Here's an overview of your Attendance System</p>
            <p>Quick stats and important information about employee attendance will be displayed here.</p>
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
            <p>Manage employee accounts and permissions</p>
            <p>Employee account management tools and options will be available here.</p>
          </div>
        );
      // other cases here...
      default:
        return null;
    }
  };

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <div className="sidebar-header">
          <h1>Admin Dashboard</h1>
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
