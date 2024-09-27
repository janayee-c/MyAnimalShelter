import React, { useState } from 'react';

const AddTreat = () => {
    const [animalID, setanimalID] = useState('');
    const [sessionId, setSessionId] = useState('');

    const handleanimalIDChange = (e) => {
        setanimalID(e.target.value);
    };

    const handleSessionIdChange = (e) => {
        setSessionId(e.target.value);
    };

    const handleSubmit = () => {
        // You can handle form submission logic here
        console.log('Submitted:', { animalID, sessionId });
    };

    return (
        <div>
            <h4>Add Treats</h4>
            <div>
                <label htmlFor="animalID">Animal ID:</label>
                <input
                    type="text"
                    id="animalID"
                    value={animalID}
                    onChange={handleanimalIDChange}
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
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default AddTreat;