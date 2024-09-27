import React, { useState } from 'react';

const AddSponsor = () => {
    const [sponsorId, setSponsorId] = useState('');
    const [sponsorName, setSponsorName] = useState('');
    const [associatedOrganization, setAssociatedOrganization] = useState('');

    const handleSponsorIdChange = (e) => {
        setSponsorId(e.target.value);
    };

    const handleSponsorNameChange = (e) => {
        setSponsorName(e.target.value);
    };

    const handleAssociatedOrganizationChange = (e) => {
        setAssociatedOrganization(e.target.value);
    };

    const handleSubmit = () => {
        // You can handle form submission logic here
        console.log('Submitted:', { sponsorId, sponsorName, associatedOrganization });
    };

    return (
        <div>
            <h4>New Sponsor</h4>
            <div>
                <label htmlFor="sponsorId">Sponsor ID:</label>
                <input
                    type="text"
                    id="sponsorId"
                    value={sponsorId}
                    onChange={handleSponsorIdChange}
                />
            </div>
            <div>
                <label htmlFor="sponsorName">Sponsor Name:</label>
                <input
                    type="text"
                    id="sponsorName"
                    value={sponsorName}
                    onChange={handleSponsorNameChange}
                />
            </div>
            <div>
                <label htmlFor="associatedOrganization">Associated Organization:</label>
                <input
                    type="text"
                    id="associatedOrganization"
                    value={associatedOrganization}
                    onChange={handleAssociatedOrganizationChange}
                />
            </div>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default AddSponsor;