import React from 'react';
import AddEmployee from "../components/addInstances/AddEmployee";
import AddVolunteer from "../components/addInstances/AddVolunteer";
const StaffInformation = () => {
    return (
        <div>
            <h1>Staff Information</h1>
            <h2>Employees</h2>
                <AddEmployee />
            <h2>Volunteers</h2>
                <AddVolunteer />
        </div>
    );
};

export default StaffInformation;