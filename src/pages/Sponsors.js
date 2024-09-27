import React from 'react';
import AddDonation from "../components/addInstances/AddDonation";
import AddSponsor from "../components/addInstances/AddSponsor";
const Sponsors = () => {
    return (
        <div>
            <h1>Sponsor Information</h1>
            <h2>Sponsors</h2>
                <AddSponsor />
            <h2>Donations</h2>
                <AddDonation />
        </div>
    );
};

export default Sponsors;