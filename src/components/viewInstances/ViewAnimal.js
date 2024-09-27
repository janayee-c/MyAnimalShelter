import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Dialog, DialogTitle, DialogContent, TextField, DialogActions, MenuItem, Select } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import RefreshIcon from "@mui/icons-material/Refresh";
import '../../styles/views.css';

const ViewAnimal = () => {
    const [animalData, setAnimalData] = useState([]);
    const [maxAgeData, setMaxAgeData] = useState([]); // State to hold max age data
    const [selectedAnimalID, setSelectedAnimalID] = useState(null);
    const [editNameModalOpen, setEditNameModalOpen] = useState(false);
    const [editNameForm, setEditNameForm] = useState({
        animalID: '',
        aname: '',
    });
    const [editAgeModalOpen, setEditAgeModalOpen] = useState(false);
    const [editAgeForm, setEditAgeForm] = useState({
        animalID: '',
        age: 0,
    });
    const [editSpeciesModalOpen, setEditSpeciesModalOpen] = useState(false);
    const [editSpeciesForm, setEditSpeciesForm] = useState({
        animalID: '',
        species: '',
    });
    const [editAdoptionStatusModalOpen, setEditAdoptionStatusModalOpen] = useState(false);
    const [editAdoptionStatusForm, setEditAdoptionStatusForm] = useState({
        animalID: '',
        adoptionStatus: '',
    });

    const [speciesList, setSpeciesList] = useState([]);
    const [selectedSpecies, setSelectedSpecies] = useState("");

// Function to fetch species list and search
    const fetchSpeciesList = async () => {
        try {
            const response = await axios.get('http://localhost:3001/api/get_animalspecies');
            setSpeciesList(response.data);
        } catch (error) {
            console.error('Error fetching species list:', error);
        }
    };

    // Fetch all species when component mounts!
    useEffect(() => {
        fetchSpeciesList();
    }, []);

// Function to handle species selection change
    const handleSpeciesDropdownChange = (event) => {
        setSelectedSpecies(event.target.value);
    };

    const fetchAnimals = async () => {
        try {
            const response = await axios.get('http://localhost:3001/api/get_animals');
            setAnimalData(response.data);
            alert('Successfully refreshed animal table!')
        } catch (error) {
            console.error('There was an error fetching the animal data:', error);
        }
    };

    useEffect(() => {
        fetchAnimals();
    }, []);

    const fetchMaxAgeBySpecies = async () => {
        try {
            const response = await axios.get('http://localhost:3001/api/get_max_age_and_names_by_species');
            setMaxAgeData(response.data);
        } catch (error) {
            console.error('Error fetching max age by species:', error);
        }
    };

    useEffect(() => {
        fetchSpeciesList();
        fetchAnimals();
    }, []);

    const handleRemoveSelected = async () => {
        if (selectedAnimalID !== null) {
            try {
                const response = await axios.post('http://localhost:3001/api/delete_animal', {animalID: selectedAnimalID}, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                console.log('Submitted successfully', response.data);
                fetchAnimals();
            } catch (err) {
                console.log(err);
            }
        }
    };

    const handleEditNameClick = () => {
        setEditNameModalOpen(true);
    };

    const handleEditNameSubmit = async () => {
        if (!editNameForm.animalID || !editNameForm.aname) {
            alert('Please select an animal and fill in the new name.');
            return;
        }
        try {
            const response = await axios.post('http://localhost:3001/api/update_animalname', {
                animalID: editNameForm.animalID,
                newName: editNameForm.aname,
            }, {
                headers: { 'Content-Type': 'application/json' }
            });

            if (response.data.success) {
                alert('Name updated successfully');
                fetchAnimals();
            } else {
                alert('Failed to update name.'); // Show error message if unsuccessful
            }
            setEditNameModalOpen(false);
        } catch (error) {
            console.error('Failed to update animal name:', error);
            alert('Failed to update name');
        }
    };

    const handleEditAgeClick = () => {
        setEditAgeModalOpen(true);
    };

    const handleEditAgeSubmit = async () => {
        if (!editAgeForm.animalID || !editAgeForm.age) {
            alert('Please select an animal and fill in the new age.');
            return;
        }
        try {
            const response = await axios.post('http://localhost:3001/api/update_animalage', {
                animalID: editAgeForm.animalID,
                newAge: editAgeForm.age,
            }, {
                headers: { 'Content-Type': 'application/json' }
            });

            if (response.data.success) {
                alert('Age updated successfully');
                fetchAnimals();
            } else {
                alert('Failed to update new age.'); // Show error message if unsuccessful
            }
            setEditAgeModalOpen(false);
        } catch (error) {
            console.error('Failed to update new age:', error);
            alert('Failed to update age');
        }
    };

    const handleEditSpeciesClick = () => {
        setEditSpeciesModalOpen(true);
    };

    const handleEditSpeciesSubmit = async () => {
        if (!editSpeciesForm.animalID || !editSpeciesForm.species) {
            alert('Please select an animal and fill in the new species.');
            return;
        }
        try {
            const response = await axios.post('http://localhost:3001/api/update_animalspecies', {
                animalID: editSpeciesForm.animalID,
                newSpecies: editSpeciesForm.species,
            }, {
                headers: { 'Content-Type': 'application/json' }
            });

            if (response.data.success) {
                alert('Species updated successfully');
                fetchAnimals();
            } else {
                alert('Failed to update species.'); // Show error message if unsuccessful
            }
            setEditSpeciesModalOpen(false);
        } catch (error) {
            console.error('Failed to update species:', error);
            alert('Failed to update species');
        }
    };

    const handleEditAdoptionStatusClick = () => {
        setEditAdoptionStatusModalOpen(true);
    };

    const handleEditAdoptionStatusSubmit = async () => {
        if (!editAdoptionStatusForm.animalID || !editAdoptionStatusForm.adoptionStatus) {
            alert('Please select an animal and fill in the new adoption status.');
            return;
        }
        try {
            const response = await axios.post('http://localhost:3001/api/update_animaladoptionstatus', {
                animalID: editAdoptionStatusForm.animalID,
                newAdoptionStatus: editAdoptionStatusForm.adoptionStatus,
            }, {
                headers: { 'Content-Type': 'application/json' }
            });

            if (response.data.success) {
                alert('Adoption status updated successfully');
                fetchAnimals();
            } else {
                alert('Failed to update adoption status.'); // Show error message if unsuccessful
            }
            setEditAdoptionStatusModalOpen(false);
        } catch (error) {
            console.error('Failed to update adoption status:', error);
            alert('Failed to update adoption status');
        }
    };

    return (
        <>
            <h1> Animal Table </h1>
            <TableContainer component={Paper} style={{paddingTop:'20px', margin:"20px", width:"100%"}}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Animal ID</TableCell>
                            <TableCell>Species</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Age</TableCell>
                            <TableCell>Diet</TableCell>
                            <TableCell>Adoption Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {animalData.map((animal) => (
                            <TableRow key={animal.animalID}
                                      onClick={() => setSelectedAnimalID(animal.animalID)}
                                      hover
                                      selected={(selectedAnimalID === animal.animalID)}>
                                <TableCell>{animal.animalID}</TableCell>
                                <TableCell>{animal.species}</TableCell>
                                <TableCell>{animal.aname}</TableCell>
                                <TableCell>{animal.age}</TableCell>
                                <TableCell>{animal.diet}</TableCell>
                                <TableCell>{animal.adoptionStatus}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Button
                variant="contained"
                color="secondary"
                startIcon={<DeleteIcon/>}
                onClick={handleRemoveSelected}
                style={{marginLeft: '10px', marginTop: '10px'}}
                disabled={!selectedAnimalID}
            >
                Remove Selected
            </Button>
            <Button
                variant="contained"
                onClick={fetchAnimals}
                style={{marginLeft: '10px', marginTop: '10px'}}
                startIcon={<RefreshIcon />}
            >
                Refresh Animals
            </Button>


            <Button
                variant="contained"
                onClick={handleEditNameClick}
                style={{marginLeft: '10px', marginTop: '10px'}}
            >
                Edit Name
            </Button>
            <Dialog open={editNameModalOpen} onClose={() => setEditNameModalOpen(false)}>
                <DialogTitle>Edit Animal Name</DialogTitle>
                <DialogContent>
                    <Select
                        value={editNameForm.animalID}
                        onChange={(e) => setEditNameForm({ ...editNameForm, animalID: e.target.value })}
                        fullWidth
                    >
                        {animalData.map((animal) => (
                            <MenuItem key={animal.animalID} value={animal.animalID}>{animal.animalID}</MenuItem>
                        ))}
                    </Select>
                    <TextField
                        margin="dense"
                        id="name"
                        label="New Animal Name"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={editNameForm.aname}
                        onChange={(e) => setEditNameForm({ ...editNameForm, aname: e.target.value })}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleEditNameSubmit}>Save</Button>
                </DialogActions>
            </Dialog>


            <Button
                variant="contained"
                onClick={handleEditAgeClick}
                style={{marginLeft: '10px', marginTop: '10px'}}
            >
                Edit Age
            </Button>
            <Dialog open={editAgeModalOpen} onClose={() => setEditAgeModalOpen(false)}>
                <DialogTitle>Edit Animal Age</DialogTitle>
                <DialogContent>
                    <Select
                        value={editAgeForm.animalID}
                        onChange={(e) => setEditAgeForm({ ...editAgeForm, animalID: e.target.value })}
                        fullWidth
                    >
                        {animalData.map((animal) => (
                            <MenuItem key={animal.animalID} value={animal.animalID}>{animal.animalID}</MenuItem>
                        ))}
                    </Select>
                    <TextField
                        margin="dense"
                        id="age"
                        label="New Animal Age"
                        type="number"
                        fullWidth
                        variant="standard"
                        value={editAgeForm.age}
                        onChange={(e) => setEditAgeForm({ ...editAgeForm, age: parseInt(e.target.value) })}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleEditAgeSubmit}>Save</Button>
                </DialogActions>
            </Dialog>

            <Button
                variant="contained"
                onClick={handleEditSpeciesClick}
                style={{marginLeft: '10px', marginTop: '10px'}}
            >
                Edit Species
            </Button>
            <Dialog open={editSpeciesModalOpen} onClose={() => setEditSpeciesModalOpen(false)}>
                <DialogTitle>Edit Animal Species</DialogTitle>
                <DialogContent>
                    <Select
                        value={editSpeciesForm.animalID}
                        onChange={(e) => setEditSpeciesForm({ ...editSpeciesForm, animalID: e.target.value })}
                        fullWidth
                    >
                        {animalData.map((animal) => (
                            <MenuItem key={animal.animalID} value={animal.animalID}>{animal.animalID}</MenuItem>
                        ))}
                    </Select>
                    <TextField
                        margin="dense"
                        id="species"
                        label="New Animal Species"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={editSpeciesForm.species}
                        onChange={(e) => setEditSpeciesForm({ ...editSpeciesForm, species: e.target.value })}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleEditSpeciesSubmit}>Save</Button>
                </DialogActions>
            </Dialog>

            <Button
                variant="contained"
                onClick={handleEditAdoptionStatusClick}
                style={{marginLeft: '10px', marginTop: '10px'}}
            >
                Edit Adoption Status
            </Button>
            <Dialog open={editAdoptionStatusModalOpen} onClose={() => setEditAdoptionStatusModalOpen(false)}>
                <DialogTitle>Edit Animal Adoption Status</DialogTitle>
                <DialogContent>
                    <Select
                        value={editAdoptionStatusForm.animalID}
                        onChange={(e) => setEditAdoptionStatusForm({ ...editAdoptionStatusForm, animalID: e.target.value })}
                        fullWidth
                    >
                        {animalData.map((animal) => (
                            <MenuItem key={animal.animalID} value={animal.animalID}>{animal.animalID}</MenuItem>
                        ))}
                    </Select>
                    <TextField
                        margin="dense"
                        id="adoptionStatus"
                        label="New Adoption Status"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={editAdoptionStatusForm.adoptionStatus}
                        onChange={(e) => setEditAdoptionStatusForm({ ...editAdoptionStatusForm, adoptionStatus: e.target.value })}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleEditAdoptionStatusSubmit}>Save</Button>
                </DialogActions>
            </Dialog>

            <>
                {/* Dropdown menu to filter animal species */}
                <div style={{marginTop: '30px', margin: "20px"}}>
                    <h2> Filter By Animal Species </h2>
                </div>

                <Select
                    value={selectedSpecies}
                    onChange={handleSpeciesDropdownChange}
                    fullWidth
                    style={{marginTop: '10px', margin: "20px", width: "100%", backgroundColor: "whitesmoke"}}
                >
                    <MenuItem value="">All Species</MenuItem>
                    {speciesList.map((speciesObject) => (
                        <MenuItem key={speciesObject.species} value={speciesObject.species}>
                            {speciesObject.species}
                        </MenuItem>
                    ))};
                </Select>

                {/* This is the filtering table for selecting animals! */}
                <TableContainer component={Paper} style={{paddingTop: '20px', margin: "20px", width: "100%"}}>
                    <Table>
                        {/* Table body with rows filtered by selected species */}
                        <TableBody>
                            {animalData
                                .filter((animal) => selectedSpecies === "" || animal.species === selectedSpecies)
                                .map((animal) => (
                                    <TableRow key={animal.animalID}>
                                        <TableCell>{animal.animalID}</TableCell>
                                        <TableCell>{animal.species}</TableCell>
                                        <TableCell>{animal.aname}</TableCell>
                                        <TableCell>{animal.age}</TableCell>
                                        <TableCell>{animal.diet}</TableCell>
                                        <TableCell>{animal.adoptionStatus}</TableCell>
                                    </TableRow>
                                ))}
                        </TableBody>
                    </Table>
                </TableContainer>


                <Button
                    variant="contained"
                    color="primary"
                    onClick={fetchMaxAgeBySpecies}
                    style={{margin: '10px'}}
                >
                    Show Max Age by Species
                </Button>
                <TableContainer component={Paper} style={{paddingTop:'20px', margin:"20px", width:"100%"}}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Species</TableCell>
                                <TableCell>Max Age</TableCell>
                                <TableCell>Names</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {maxAgeData.map((data, index) => (
                                <TableRow key={index}>
                                    <TableCell>{data.species}</TableCell>
                                    <TableCell>{data.max_age}</TableCell>
                                    <TableCell>{data.names}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </>
        </>


    );
}

export default ViewAnimal;
