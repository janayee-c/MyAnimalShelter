import React, { useState } from 'react';

const AddAdoption = () => {
    const [visitorId, setVisitorId] = useState('');
    const [animalID, setanimalID] = useState('');
    const [employeeId, setEmployeeId] = useState('');
    const [date, setDate] = useState('');

    const handleVisitorIdChange = (e) => {
        setVisitorId(e.target.value);
    };

    const handleanimalIDChange = (e) => {
        setanimalID(e.target.value);
    };

    const handleEmployeeIdChange = (e) => {
        setEmployeeId(e.target.value);
    };

    const handleDateChange = (e) => {
        setDate(e.target.value);
    };

    const handleSubmit = () => {
        // You can handle form submission logic here
        console.log('Submitted:', { visitorId, animalID, employeeId, date });
    };

    return (
        <div>
            <h4>New Adoption</h4>
            <div>
                <label htmlFor="visitorId">Visitor ID:</label>
                <input
                    type="text"
                    id="visitorId"
                    value={visitorId}
                    onChange={handleVisitorIdChange}
                />
            </div>
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
                <label htmlFor="employeeId">Employee ID:</label>
                <input
                    type="text"
                    id="employeeId"
                    value={employeeId}
                    onChange={handleEmployeeIdChange}
                />
            </div>
            <div>
                <label htmlFor="date">Date:</label>
                <input
                    type="text"
                    id="date"
                    value={date}
                    onChange={handleDateChange}
                />
            </div>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default AddAdoption;