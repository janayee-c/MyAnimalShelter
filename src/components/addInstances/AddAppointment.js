import React, { useState } from 'react';

const AddAppointment = () => {
    const [appointmentDateTime, setAppointmentDateTime] = useState('');
    const [visitorId, setVisitorId] = useState('');
    const [employeeId, setEmployeeId] = useState('');

    const handleDateTimeChange = (e) => {
        setAppointmentDateTime(e.target.value);
    };

    const handleVisitorIdChange = (e) => {
        setVisitorId(e.target.value);
    };

    const handleEmployeeIdChange = (e) => {
        setEmployeeId(e.target.value);
    };

    const handleSubmit = () => {
        // You can handle form submission logic here
        console.log('Submitted:', { appointmentDateTime, visitorId, employeeId });
    };

    return (
        <div>
            <h4>New Appointment</h4>
            <div>
                <label htmlFor="appointmentDateTime">Appointment Date and Time:</label>
                <input
                    type="text"
                    id="appointmentDateTime"
                    value={appointmentDateTime}
                    onChange={handleDateTimeChange}
                />
            </div>
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
                <label htmlFor="employeeId">Employee ID:</label>
                <input
                    type="text"
                    id="employeeId"
                    value={employeeId}
                    onChange={handleEmployeeIdChange}
                />
            </div>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default AddAppointment;