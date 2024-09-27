import React, { useState } from 'react';

const AddMedicalEntry = () => {
    const [entryId, setEntryId] = useState('');
    const [medicalRecordId, setMedicalRecordId] = useState('');
    const [notes, setNotes] = useState('');
    const [diagnosis, setDiagnosis] = useState('');
    const [treatment, setTreatment] = useState('');

    const handleEntryIdChange = (e) => {
        setEntryId(e.target.value);
    };

    const handleMedicalRecordIdChange = (e) => {
        setMedicalRecordId(e.target.value);
    };

    const handleNotesChange = (e) => {
        setNotes(e.target.value);
    };

    const handleDiagnosisChange = (e) => {
        setDiagnosis(e.target.value);
    };

    const handleTreatmentChange = (e) => {
        setTreatment(e.target.value);
    };

    const handleSubmit = () => {
        // You can handle form submission logic here
        console.log('Submitted:', { entryId, medicalRecordId, notes, diagnosis, treatment });
    };

    return (
        <div>
            <h4>New Medical Entry</h4>
            <div>
                <label htmlFor="entryId">Entry ID:</label>
                <input
                    type="text"
                    id="entryId"
                    value={entryId}
                    onChange={handleEntryIdChange}
                />
            </div>
            <div>
                <label htmlFor="medicalRecordId">Medical Record ID:</label>
                <input
                    type="text"
                    id="medicalRecordId"
                    value={medicalRecordId}
                    onChange={handleMedicalRecordIdChange}
                />
            </div>
            <div>
                <label htmlFor="notes">Notes:</label>
                <input
                    type="text"
                    id="notes"
                    value={notes}
                    onChange={handleNotesChange}
                />
            </div>
            <div>
                <label htmlFor="diagnosis">Diagnosis:</label>
                <input
                    type="text"
                    id="diagnosis"
                    value={diagnosis}
                    onChange={handleDiagnosisChange}
                />
            </div>
            <div>
                <label htmlFor="treatment">Treatment:</label>
                <input
                    type="text"
                    id="treatment"
                    value={treatment}
                    onChange={handleTreatmentChange}
                />
            </div>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default AddMedicalEntry;