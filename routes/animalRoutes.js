const express = require('express');
const router = express.Router();
const { insertValues, getAll, deleteByID, updateSingleValue, getAllDistinctSpecies, getMedicalRecordsByAdoptionStatus,
    getMaxAgeAndNamesBySpecies, getAnimalsWithMultipleMedicalEntries, insertMedicalRecord} = require('../query.js');



router.post("/add_animal", async (req, res) =>  {
    try {
        console.log(req.body);
        const {animalID, species, aname, age, diet, adoptionStatus} = req.body;
        const ret = await insertValues("Animal", [animalID, species, aname, age, diet, adoptionStatus]);
        res.send(ret);
    } catch (err) {
        res.status(500).send(err);
        console.log(err);
    }
})


router.get("/get_animals", async  (req, res) => {
    try {
        const rows = await getAll("Animal");
        console.log(rows);

        //making new array of row objects with specific designations

        const animals = rows.map(animal => {
            return {
                animalID: animal.animalID,
                species: animal.species,
                aname: animal.aname,
                age: animal.age,
                diet: animal.diet,
                adoptionStatus: animal.adoptionStatus
            };
        });

        res.json(animals); //first make it into json! (parseable)



    } catch (err) {
        res.status(500).send(err);
        console.log(err);
    }
})

router.post("/delete_animal", async (req, res) =>  {
    try {

        const {animalID} = req.body;
        const ret = await deleteByID("animal", animalID)
        res.send(ret);

    } catch (err) {
        res.status(500).send(err);
        console.log(err);
    }
})

router.post("/update_animalname", async (req, res) => {
    try {
        const { animalID, newName } = req.body;
        const ret = await updateSingleValue("Animal", "aname", newName, animalID);

        if (ret.success) {
            res.send({ success: true, message: "Animal name updated successfully." });
        } else {
            res.status(500).send({ success: false, message: "Animal name was not updated successfully."});
        }

    } catch (error) {
        console.error("Failed to update animal name:", error);
        res.status(500).send({ success: false, message: "Failed to update animal name." });
    }
});

// In your router file, such as animalRoutes.js
router.get("/get_max_age_and_names_by_species", async (req, res) => {
    try {
        const maxAgesAndNames = await getMaxAgeAndNamesBySpecies();
        res.json(maxAgesAndNames);
    } catch (error) {
        console.error('Error fetching maximum age and names by species:', error);
        res.status(500).send('Failed to fetch maximum age and names by species');
    }
});


router.post("/update_animalage", async (req, res) => {
    try {
        const { animalID, newAge } = req.body;
        const ret = await updateSingleValue("Animal", "age", newAge, animalID);

        if (ret.success) {
            res.send({ success: true, message: "Animal age updated successfully." });
        } else {
            res.status(500).send({ success: false, message: "Animal age was not updated successfully."});
        }

    } catch (error) {
        console.error("Failed to update animal age:", error);
        res.status(500).send({ success: false, message: "Failed to update animal age." });
    }
});

router.post("/update_animalspecies", async (req, res) => {
    try {
        const { animalID, newSpecies } = req.body;
        const ret = await updateSingleValue("Animal", "species", newSpecies, animalID);

        if (ret.success) {
            res.send({ success: true, message: "Animal species updated successfully." });
        } else {
            res.status(500).send({ success: false, message: "Animal species was not updated successfully."});
        }

    } catch (error) {
        console.error("Failed to update animal age:", error);
        res.status(500).send({ success: false, message: "Failed to update animal species." });
    }
});


router.post("/update_animaladoptionstatus", async (req, res) => {
    try {
        const { animalID, newAdoptionStatus } = req.body;
        const ret = await updateSingleValue("Animal", "adoptionStatus", newAdoptionStatus, animalID);

        if (ret.success) {
            res.send({ success: true, message: "Animal adoption status updated successfully." });
        } else {
            res.status(500).send({ success: false, message: "Animal adoption status was not updated successfully."});
        }

    } catch (error) {
        console.error("Failed to update animal age:", error);
        res.status(500).send({ success: false, message: "Failed to update animal adoption status." });
    }
});

router.get("/get_animalspecies", async (req, res) => {
    try {
        const species = await getAllDistinctSpecies(); // Implement this function to fetch distinct species from the database
        res.json(species);
    } catch (error) {
        console.error('Error fetching species:', error);
        res.status(500).send('Error fetching species');
    }
});

router.get("/get_animals_with_multiple_entries", async (req, res) => {
    const minEntries = req.query.minEntries; // Get this from query parameters
    if (!minEntries) {
        return res.status(400).send({ message: "Minimum number of entries not specified" });
    }

    try {
        const animals = await getAnimalsWithMultipleMedicalEntries(parseInt(minEntries));
        res.json(animals);
    } catch (error) {
        console.error('Error fetching animals with multiple medical entries:', error);
        res.status(500).send('Failed to fetch animals with multiple medical entries');
    }
});



router.post("/add_medicalrecord", async (req, res) => {
    try {
        const { medicalRecordID, prescriptions, animalID } = req.body;
        const ret = await insertMedicalRecord([medicalRecordID, prescriptions, animalID]);


        if (ret.success) {
            res.send({ success: true, message: ret.message });
        } else {

            res.status(500).send({ success: false, message: ret.message });
        }
    } catch (err) {

        console.error(err);
        res.status(500).send({ success: false, message: "An unexpected error occurred." });
    }
});


router.get("/get_medicalrecords", async  (req, res) => {
    try {
        const rows = await getAll("MedicalRecord");
        console.log(rows);

        //making new array of row objects with specific designations

        const records = rows.map(record => {
            return {
                medicalRecordID: record.medicalRecordID,
                prescriptions: record.prescriptions,
                animalID: record.animalID,
            };
        });

        res.json(records); //first make it into json! (parseable)



    } catch (err) {
        res.status(500).send(err);
        console.log(err);
    }
})

router.get("/get_medicalrecords_by_adoption_status/:adoptionStatus?", async (req, res) => {
    try {
        const { adoptionStatus } = req.params;
        const rows = await getMedicalRecordsByAdoptionStatus(parseInt(adoptionStatus));
        res.json(rows);
    } catch (err) {
        console.error('Error fetching medical records:', err);
        res.status(500).send('Error fetching medical records');
    }
});


router.get("/get_medicalentries", async  (req, res) => {
    try {
        const rows = await getAll("MedicalEntry");
        console.log(rows);

        //making new array of row objects with specific designations

        const entries = rows.map(entry => {
            return {
                medicalEntryID: entry.medicalEntryID,
                medicalRecordID: entry.medicalRecordID,
                notes: entry.notes,
                diagnosis: entry.diagnosis,
                treatment: entry.treatment,
            };
        });

        res.json(entries); //first make it into json! (parseable)



    } catch (err) {
        res.status(500).send(err);
        console.log(err);
    }
})


module.exports = router;