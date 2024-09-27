import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Welcome to Vancouver Animal Shelter</h1>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li><Link to="/animal_information">Animal Information</Link></li>
                <li><Link to="/visitors_and_appointments">Visitors and Appointments</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/staff_information">Staff Information</Link></li>
                <li><Link to="/sponsors">Sponsors</Link></li>
            </ul>
        </div>
    );
}

export default Menu;