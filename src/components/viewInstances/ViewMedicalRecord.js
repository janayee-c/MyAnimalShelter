import React, { useEffect, useState, useCallback } from 'react';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Select, MenuItem } from '@mui/material';
import RefreshIcon from "@mui/icons-material/Refresh";
import axios from "axios";

const ViewMedicalRecord = () => {
    const [medicalRecordData, setMedicalRecordData] = useState([]);
    const [adoptionStatus, setAdoptionStatus] = useState(""); // Empty string represents 'All'

    const fetchRecords = useCallback(async () => {
        try {
            const url = adoptionStatus === "" ? `http://localhost:3001/api/get_medicalrecords` : `http://localhost:3001/api/get_medicalrecords_by_adoption_status/${adoptionStatus}`;
            const response = await axios.get(url);
            setMedicalRecordData(response.data);
        } catch (error) {
            console.error('Error fetching medical records:', error);
        }
    }, [adoptionStatus]); // Dependencies array: includes everything that the function uses that could change

    useEffect(() => {
        fetchRecords();
    }, [fetchRecords]); // fetchRecords is now stable and only changes if adoptionStatus changes

    const handleAdoptionStatusChange = (event) => {
        setAdoptionStatus(event.target.value);
    };

    return (
        <>
            <h1>Medical Records Table</h1>
            <div style={{ margin: '20px' }}>
                <Select
                    value={adoptionStatus}
                    onChange={handleAdoptionStatusChange}
                    displayEmpty
                    fullWidth
                    style={{ marginBottom: '20px' }}
                >
                    <MenuItem value="">All</MenuItem>
                    <MenuItem value="1">Adopted</MenuItem>
                    <MenuItem value="0">Not Adopted</MenuItem>
                </Select>
            </div>
            <TableContainer component={Paper} style={{ paddingTop: '20px', margin: '20px', width: '100%' }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Record ID</TableCell>
                            <TableCell>Prescriptions</TableCell>
                            <TableCell>Animal ID</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {medicalRecordData.map((record) => (
                            <TableRow key={record.medicalRecordID} hover>
                                <TableCell>{record.medicalRecordID}</TableCell>
                                <TableCell>{record.prescriptions}</TableCell>
                                <TableCell>{record.animalID}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Button
                variant="contained"
                onClick={fetchRecords}
                style={{ marginLeft: '10px', marginTop: '10px' }}
                startIcon={<RefreshIcon />}
            >
                Refresh Records
            </Button>
        </>
    );
}

export default ViewMedicalRecord;
