import React from 'react';
import AddAnimal from "../components/addInstances/AddAnimal";
import AddMedicalEntry from "../components/addInstances/AddMedicalEntry";
import AddMedicalRecord from "../components/addInstances/AddMedicalRecord";
import AddTreat from "../components/addInstances/AddTreat";
import ViewAnimal from "../components/viewInstances/ViewAnimal";
import ViewMedicalRecord from "../components/viewInstances/ViewMedicalRecord";
import Container from '@mui/material/Container';
import ViewMedicalEntry from "../components/viewInstances/ViewMedicalEntry";

const AnimalInformation = () => {
    return (
        <div style={{backgroundColor:"white", paddingTop:"50px", paddingBottom:"50px"}}>
            <Container>
                <ViewAnimal/>
                <AddAnimal/>
                <ViewMedicalRecord/>
                <AddMedicalRecord/>
                <ViewMedicalEntry/>
                <AddMedicalEntry/>
                <h2>Treats</h2>
                <AddTreat/>
            </Container>
        </div>
    );
};

export default AnimalInformation;