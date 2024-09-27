import React, { useState } from 'react';
import axios from 'axios';
import { TextField,  Button, Container, Typography, Box } from '@mui/material';

const AddMedicalRecord = () => {
    const [medicalRecordID, setMedicalRecordID] = useState('');
    const [prescriptions, setPrescriptions] = useState('');
    const [animalID, setAnimalID] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const medicalRecordData = { medicalRecordID: medicalRecordID, prescriptions, animalID };
        console.log("Submitting:", medicalRecordData);

        try {
            const response = await axios.post('http://localhost:3001/api/add_medicalrecord', medicalRecordData, {
                headers: { 'Content-Type': 'application/json' }
            });

            if (response.data.success) {
                alert(response.data.message); // Show success message if successful
                setMedicalRecordID('');
                setPrescriptions('');
                setAnimalID('');
            } else {
                alert('Failed to add medical record and initial entry.'); // Show error message if unsuccessful
            }

        } catch (error) {
            console.error('Failed to submit medical record data:', error);
            alert('Failed to submit medical record data!')
        }
    };

    return (
        <Container style={{ marginTop: '50px', width: "100%" }}>
            <Typography variant="h6" gutterBottom>
                <h2>New Medical Record</h2>
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField
                    margin="dense"
                    required
                    fullWidth
                    id="MedicalRecordID"
                    label="MedicalRecord ID"
                    name="MedicalRecordID"
                    value={medicalRecordID}
                    onChange={(e) => setMedicalRecordID(e.target.value)}
                />
                <TextField
                    margin="dense"
                    required
                    fullWidth
                    id="prescriptions"
                    label="Prescriptions"
                    name="prescriptions"
                    value={prescriptions}
                    onChange={(e) => setPrescriptions(e.target.value)}
                />
                <TextField
                    margin="dense"
                    required
                    fullWidth
                    id="animalID"
                    label="Animal ID"
                    name="animalID"
                    value={animalID}
                    onChange={(e) => setAnimalID(e.target.value)}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Submit
                </Button>
            </Box>
        </Container>
    );
};

export default AddMedicalRecord;
