import React, { useState } from 'react';

const AddEmployee = () => {
    const [employeeId, setEmployeeId] = useState('');
    const [employeeName, setEmployeeName] = useState('');
    const [position, setPosition] = useState('');
    const [salary, setSalary] = useState('');

    const handleEmployeeIdChange = (e) => {
        setEmployeeId(e.target.value);
    };

    const handleEmployeeNameChange = (e) => {
        setEmployeeName(e.target.value);
    };

    const handlePositionChange = (e) => {
        setPosition(e.target.value);
    };

    const handleSalaryChange = (e) => {
        setSalary(e.target.value);
    };

    const handleSubmit = () => {
        // You can handle form submission logic here
        console.log('Submitted:', { employeeId, employeeName, position, salary });
    };

    return (
        <div>
            <h4>Add Employee</h4>
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
                <label htmlFor="employeeName">Name:</label>
                <input
                    type="text"
                    id="employeeName"
                    value={employeeName}
                    onChange={handleEmployeeNameChange}
                />
            </div>
            <div>
                <label htmlFor="position">Position:</label>
                <input
                    type="text"
                    id="position"
                    value={position}
                    onChange={handlePositionChange}
                />
            </div>
            <div>
                <label htmlFor="salary">Salary:</label>
                <input
                    type="text"
                    id="salary"
                    value={salary}
                    onChange={handleSalaryChange}
                />
            </div>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default AddEmployee;