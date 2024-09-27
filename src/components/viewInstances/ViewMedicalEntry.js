import React, { useEffect, useState } from 'react';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import axios from "axios";
import '../../styles/views.css';

const ViewMedicalEntry = () => {
    const [medicalEntryData, setMedicalEntryData] = useState([]);
    const [selectedEntryID, setSelectedEntryID] = useState(null);

    const fetchEntries = async () => {
        try {
            const response = await axios.get('http://localhost:3001/api/get_medicalentries');
            setMedicalEntryData(response.data); // Assuming the endpoint returns an array of medical entries
        } catch (error) {
            console.error('There was an error fetching the medical entries data:', error);
        }
    };

    useEffect(() => {
        fetchEntries();
    }, []);

    // This function could be used for future implementations (e.g., viewing details, editing, or deleting an entry)
    const handleSelectEntry = (entryID) => {
        setSelectedEntryID(entryID);
    };

    return (
        <>
            <h1>Medical Entries Table</h1>
            <TableContainer component={Paper} style={{ marginTop: '20px', marginBottom: '20px' }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Entry ID</TableCell>
                            <TableCell>Medical Record ID</TableCell>
                            <TableCell>Notes</TableCell>
                            <TableCell>Diagnosis</TableCell>
                            <TableCell>Treatment</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {medicalEntryData.map((entry) => (
                            <TableRow key={entry.medicalEntryID}
                                      onClick={() => handleSelectEntry(entry.medicalEntryID)}
                                      hover
                                      >
                                <TableCell>{entry.medicalEntryID}</TableCell>
                                <TableCell>{entry.medicalRecordID}</TableCell>
                                <TableCell>{entry.notes}</TableCell>
                                <TableCell>{entry.diagnosis}</TableCell>
                                <TableCell>{entry.treatment}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Button
                variant="contained"
                startIcon={<RefreshIcon />}
                onClick={fetchEntries}
                style={{ marginLeft: '10px', marginTop: '10px' }}
            >
                Refresh Entries
            </Button>
        </>
    );
}

export default ViewMedicalEntry;
