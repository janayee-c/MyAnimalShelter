import React from 'react';
import AddVisitor from "../components/addInstances/AddVisitor";
import AddAdoption from "../components/addInstances/AddAdoption";
import AddAppointment from "../components/addInstances/AddAppointment";


const VisitorsAndAppointments = () => {
    return (
        <div>
            <h1>Visitors and Appointments</h1>
            <h2>Visitors</h2>
                <AddVisitor />
            <h2>Appointments</h2>
                <AddAppointment />
            <h2>Adoptions</h2>
                <AddAdoption />
        </div>
    );
};

export default VisitorsAndAppointments;