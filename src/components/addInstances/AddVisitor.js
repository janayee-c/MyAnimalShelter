import React, { useState } from 'react';

const AddVisitor = () => {
    const [visitorId, setVisitorId] = useState('');
    const [name, setName] = useState('');

    const handleVisitorIdChange = (e) => {
        setVisitorId(e.target.value);
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleSubmit = () => {
        // You can handle form submission logic here
        console.log('Submitted:', { visitorId, name });
    };

    return (
        <div>
            <h4>Add a new visitor</h4>
                <label htmlFor="visitorId">Visitor ID:</label>
                <input
                    type="text"
                    id="visitorId"
                    value={visitorId}
                    onChange={handleVisitorIdChange}
                />
            <div>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={handleNameChange}
                />
            </div>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default AddVisitor;