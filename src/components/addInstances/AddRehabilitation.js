import React, { useState } from 'react';

const AddRehabilitation = () => {
    const [training, setTraining] = useState('');
    const [sessionId, setSessionId] = useState('');
    const [cost, setCost] = useState('');

    const handleTrainingChange = (e) => {
        setTraining(e.target.value);
    };

    const handleSessionIdChange = (e) => {
        setSessionId(e.target.value);
    };

    const handleCostChange = (e) => {
        setCost(e.target.value);
    };

    const handleSubmit = () => {
        // You can handle form submission logic here
        console.log('Submitted:', { training, sessionId, cost });
    };

    return (
        <div>
            <h4>Add Rehabilitation</h4>
            <div>
                <label htmlFor="training">Training:</label>
                <input
                    type="text"
                    id="training"
                    value={training}
                    onChange={handleTrainingChange}
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
                <label htmlFor="cost">Cost:</label>
                <input
                    type="text"
                    id="cost"
                    value={cost}
                    onChange={handleCostChange}
                />
            </div>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default AddRehabilitation;