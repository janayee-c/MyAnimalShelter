import React from 'react';
import AddEducationProgram from "../components/addInstances/AddEducationProgram";
import AddRehabilitation from "../components/addInstances/AddRehabilitation";
import AddServices from "../components/addInstances/AddServices";
const Services = () => {
    return (
        <div>
            <h1>Services</h1>
            <h2>Services</h2>
                <AddServices />
            <h2>Rehabilitation</h2>
                <AddRehabilitation />
            <h2>Education Programs</h2>
                <AddEducationProgram />
        </div>
    );
};

export default Services;