import React, { useState } from 'react';

const AddDonation = () => {
    const [amount, setAmount] = useState('');
    const [sponsorId, setSponsorId] = useState('');
    const [dateOfDonation, setDateOfDonation] = useState('');

    const handleAmountChange = (e) => {
        setAmount(e.target.value);
    };

    const handleSponsorIdChange = (e) => {
        setSponsorId(e.target.value);
    };

    const handleDateOfDonationChange = (e) => {
        setDateOfDonation(e.target.value);
    };

    const handleSubmit = () => {
        // You can handle form submission logic here
        console.log('Submitted:', { amount, sponsorId, dateOfDonation });
    };

    return (
        <div>
            <h4>New Donation</h4>
            <div>
                <label htmlFor="amount">Amount:</label>
                <input
                    type="text"
                    id="amount"
                    value={amount}
                    onChange={handleAmountChange}
                />
            </div>
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
                <label htmlFor="dateOfDonation">Date of Donation:</label>
                <input
                    type="text"
                    id="dateOfDonation"
                    value={dateOfDonation}
                    onChange={handleDateOfDonationChange}
                />
            </div>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default AddDonation;