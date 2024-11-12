// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Login from "./Login";
import Register  from "./Register";
import RegisterStepTwo  from "./RegisterStepTwo";
import HRDashboard from "./HRDashboard";
import SysAdminDashboard from "./SysAdminDashboard";
import ProtectedRoute from './ProtectedRoute';
import logo from './images/MainLogo.png';

function App() {
    return (
         <Router>
      <Routes>
        <Route path="/" element={<HRDashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/registerStepTwo" element={<RegisterStepTwo />} />
      </Routes>
    </Router>
    );
}

export default App;
