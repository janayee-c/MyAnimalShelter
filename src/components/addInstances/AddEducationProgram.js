import React, { useState } from 'react';

const AddProgram = () => {
    const [programName, setProgramName] = useState('');
    const [sessionId, setSessionId] = useState('');
    const [volunteerId, setVolunteerId] = useState('');

    const handleProgramNameChange = (e) => {
        setProgramName(e.target.value);
    };

    const handleSessionIdChange = (e) => {
        setSessionId(e.target.value);
    };

    const handleVolunteerIdChange = (e) => {
        setVolunteerId(e.target.value);
    };

    const handleSubmit = () => {
        // You can handle form submission logic here
        console.log('Submitted:', { programName, sessionId, volunteerId });
    };

    return (
        <div>
            <h4>Add Education Program</h4>
            <div>
                <label htmlFor="programName">Program Name:</label>
                <input
                    type="text"
                    id="programName"
                    value={programName}
                    onChange={handleProgramNameChange}
                />
            </div>
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
                <label htmlFor="volunteerId">Volunteer ID:</label>
                <input
                    type="text"
                    id="volunteerId"
                    value={volunteerId}
                    onChange={handleVolunteerIdChange}
                />
            </div>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default AddProgram;