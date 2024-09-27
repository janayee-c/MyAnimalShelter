import React, { useState } from 'react';

const AddService = () => {
    const [sessionId, setSessionId] = useState('');
    const [sessionDate, setSessionDate] = useState('');

    const handleSessionIdChange = (e) => {
        setSessionId(e.target.value);
    };

    const handleSessionDateChange = (e) => {
        setSessionDate(e.target.value);
    };

    const handleSubmit = () => {
        // You can handle form submission logic here
        console.log('Submitted:', { sessionId, sessionDate });
    };

    return (
        <div>
            <h4>Add Service</h4>
            <div>
                <label htmlFor="sessionId">Session ID:</label>
                <input
                    type="text"
                    id="sessionId"
                    value={sessionId}
                    onChange={handleSessionIdChange}
                />
            </div>
            <div>
                <label htmlFor="sessionDate">Session Date:</label>
                <input
                    type="text"
                    id="sessionDate"
                    value={sessionDate}
                    onChange={handleSessionDateChange}
                />
            </div>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default AddService;