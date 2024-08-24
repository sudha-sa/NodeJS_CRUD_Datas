import express from "express";

import { getAllPeople, getPersonById, createPerson, updatePersonById, deletePersonById } from "../Controllers/PeopleController.js";


const router = express.Router();

router.get('/', getAllPeople);
router.get('/:id', getPersonById);
router.post('/', createPerson);
router.put('/:id', updatePersonById);
router.delete('/:id', deletePersonById);




export default router;
