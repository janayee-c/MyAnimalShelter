import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Container, Typography, Box } from '@mui/material';

const AddAnimal = () => {
    const [animalID, setAnimalID] = useState('');
    const [species, setSpecies] = useState('');
    const [aname, setAName] = useState('');
    const [age, setAge] = useState('');
    const [diet, setDiet] = useState('');
    const [adoptionStatus, setAdoptionStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const animalData = { animalID, species, aname, age, diet, adoptionStatus };
        console.log("Submitting:", animalData);

        try {
            const response = await axios.post('http://localhost:3001/api/add_animal', animalData, {
                headers: { 'Content-Type': 'application/json' }
            });
            console.log('Submitted successfully', response.data);
            alert('added ' + aname + ' the ' + species + ' as a new animal!')
            setAnimalID('');
            setSpecies('');
            setAName('');
            setAge('');
            setDiet('');
            setAdoptionStatus('');

        } catch (error) {
            console.error('Failed to submit animal data:', error);
        }
    };

    return (

        <Container style={{marginTop: '50px', width: "100%"}}>

        <Typography variant="h6" gutterBottom> {/* Adjusted for compactness */}
            <h2>New Animal</h2>
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
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
                <TextField
                    margin="dense"
                    required
                    fullWidth
                    id="species"
                    label="Species"
                    name="species"
                    value={species}
                    onChange={(e) => setSpecies(e.target.value)}
                />
                <TextField
                    margin="dense"
                    required
                    fullWidth
                    id="aname"
                    label="Animal Name"
                    name="aname"
                    value={aname}
                    onChange={(e) => setAName(e.target.value)}
                />
                <TextField
                    margin="dense"
                    required
                    fullWidth
                    id="age"
                    label="Age"
                    name="age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
                <TextField
                    margin="dense"
                    required
                    fullWidth
                    id="diet"
                    label="Diet"
                    name="diet"
                    value={diet}
                    onChange={(e) => setDiet(e.target.value)}
                />
                <TextField
                    margin="dense"
                    required
                    fullWidth
                    id="adoptionStatus"
                    label="Adoption Status"
                    name="adoptionStatus"
                    value={adoptionStatus}
                    onChange={(e) => setAdoptionStatus(e.target.value)}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 1, mb: 1 }}
                >
                    Submit
                </Button>
            </Box>
        </Container>
    );
};

export default AddAnimal;
