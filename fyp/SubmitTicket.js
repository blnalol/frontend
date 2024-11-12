// SubmitTicket.js

import React, { useState } from "react";
import "./SubmitTicket.css"; // Importing CSS for styling

export const SubmitTicket = (props) => {
    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [description, setDescription] = useState('');
    const [issueType, setIssueType] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform validation and submission logic here
        console.log({
            email,
            fullName,
            description,
            issueType,
        });
        // Reset the form after submission
        setEmail('');
        setFullName('');
        setDescription('');
        setIssueType('');
    };

    return (
        <div className="submit-ticket-container">
            <h2>Submit a Support Ticket</h2>
            <button className="back-button" onClick={() => props.onFormSwitch('hrDashboard')}>
                Back
            </button>
            <form className="submit-ticket-form" onSubmit={handleSubmit}>
                <label htmlFor="fullName">Full Name:</label>
                <input
                    type="text"
                    id="fullName"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                />

                <label htmlFor="email">Email Address:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <label htmlFor="issueType">Type of Issue:</label>
                <div className="issue-type-container">
                    <label>
                        <input
                            type="radio"
                            value="Attendance Issues"
                            checked={issueType === "Attendance Issues"}
                            onChange={(e) => setIssueType(e.target.value)}
                        />
                        Attendance Issues
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="Technical Issues - Lag, Crashes, Patch"
                            checked={issueType === "Technical Issues - Lag, Crashes, Patch"}
                            onChange={(e) => setIssueType(e.target.value)}
                        />
                        Technical Issues
                    </label>
                </div>

                <label htmlFor="description">Description:</label>
                <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />

                <button type="submit">Submit Ticket</button>
            </form>
        </div>
    );
};

export default SubmitTicket;
