import React, { useState } from 'react';
import './AttendanceReport.css';

const AttendanceReport = () => {
    const [department, setDepartment] = useState('');
    const [employeeId, setEmployeeId] = useState('');
    const [employeeName, setEmployeeName] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    // Sample static data for attendance
    const attendanceData = [
        { id: 1, name: 'John Doe', date: '2024-11-01', status: 'Present', department: 'IT' },
        { id: 2, name: 'Jane Smith', date: '2024-11-01', status: 'Absent', department: 'IT' },
        { id: 3, name: 'Alice Johnson', date: '2024-11-02', status: 'Present', department: 'HR' },
        { id: 4, name: 'Bob Brown', date: '2024-11-02', status: 'Present', department: 'Engineering' },
        { id: 5, name: 'Charlie Black', date: '2024-11-24', status: 'Present', department: 'IT' },
        { id: 6, name: 'Daisy White', date: '2024-11-24', status: 'Absent', department: 'HR' },
        // Add more sample data as needed
    ];

    const [filteredData, setFilteredData] = useState([]);

    const handleSearch = () => {
        if (employeeId || employeeName || department) {
            const filteredResults = attendanceData.filter(record => {
                const isInDateRange =
                    (!startDate || new Date(record.date) >= new Date(startDate)) &&
                    (!endDate || new Date(record.date) <= new Date(endDate));

                const isInDepartment = !department || record.department === department;

                const isEmployeeIdMatch = !employeeId || record.id.toString() === employeeId;
                const isEmployeeNameMatch = !employeeName || record.name.toLowerCase().includes(employeeName.toLowerCase());

                return isInDateRange && isInDepartment && isEmployeeIdMatch && isEmployeeNameMatch;
            });
            setFilteredData(filteredResults);
        } else {
            setFilteredData([]); // Clear results if no criteria are provided
        }
    };

    return (
        <div className="attendance-report">
            <h1>Attendance Report</h1>
            <div className="filter-section">
                <div className="input-group">
                    <label htmlFor="employee-id">Employee ID:</label>
                    <input 
                        type="text" 
                        id="employee-id" 
                        placeholder="Enter Employee ID" 
                        value={employeeId} 
                        onChange={(e) => setEmployeeId(e.target.value)} 
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="employee-name">Employee Name:</label>
                    <input 
                        type="text" 
                        id="employee-name" 
                        placeholder="Enter Employee Name" 
                        value={employeeName} 
                        onChange={(e) => setEmployeeName(e.target.value)} 
                    />
                </div>
                <div className="date-range">
                    <div className="input-group">
                        <label htmlFor="start-date">Start Date:</label>
                        <input 
                            type="date" 
                            id="start-date" 
                            value={startDate} 
                            onChange={(e) => setStartDate(e.target.value)} 
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="end-date">End Date:</label>
                        <input 
                            type="date" 
                            id="end-date" 
                            value={endDate} 
                            onChange={(e) => setEndDate(e.target.value)} 
                        />
                    </div>
                </div>
                <div className="input-group">
                    <label htmlFor="department">Department:</label>
                    <select id="department" onChange={(e) => setDepartment(e.target.value)}>
                        <option value="">Select Department</option>
                        <option value="HR">HR</option>
                        <option value="IT">IT</option>
                        <option value="Engineering">Engineering</option>
                    </select>
                </div>
                <button onClick={handleSearch}>Get Report</button>
            </div>
            <div className="attendance-list">
                {filteredData.length > 0 ? (
                    filteredData.map(record => (
                        <div key={record.id} className={`attendance-item ${record.status.toLowerCase()}`}>
                            <span>{record.date}: </span>
                            <span>{record.name} - {record.status} (Department: {record.department})</span>
                        </div>
                    ))
                ) : (
                    employeeId || employeeName || department ? <div>No records found.</div> : null
                )}
            </div>
        </div>
    );
};

export default AttendanceReport;
