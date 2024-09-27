import React, { useState } from 'react';

const AddVolunteer = () => {
    const [volunteerId, setVolunteerId] = useState('');
    const [name, setName] = useState('');

    const handleVolunteerIdChange = (e) => {
        setVolunteerId(e.target.value);
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleSubmit = () => {
        // You can handle form submission logic here
        console.log('Submitted:', { volunteerId, name });
    };

    return (
        <div>
            <h4>Add Volunteer</h4>
            <div>
                <label htmlFor="volunteerId">Volunteer ID:</label>
                <input
                    type="text"
                    id="volunteerId"
                    value={volunteerId}
                    onChange={handleVolunteerIdChange}
                />
            </div>
            <div>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={handleNameChange}
                />
            </div>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default AddVolunteer;