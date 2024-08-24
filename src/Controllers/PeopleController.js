import People from "../Models/PeopleModeljs";

// Get all people
export const getAllPeople = async (req, res) => {
    try {
        const people = await People.find();
        res.status(200).json(people);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a person by ID
export const getPersonById = async (req, res) => {
    try {
        const person = await People.findById(req.params.id);
        if (!person)
            return res.status(404).json({ message: 'Person not found' });
        res.status(200).json(person);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



// Create a new person
export const createPerson = async (req, res) => {
    const { name, age, email, address, MobileNumber, PassportPhoto} = req.body;
    console.log('Request Body:', req.body);
    const newPerson = new People({ name, age, email, address, MobileNumber ,PassportPhoto});
    try {
        const savedPerson = await newPerson.save();
        res.status(201).json(savedPerson);
       
    } catch (error) {
        console.error('Error:', error.message);
        res.status(400).json({ message: error.message });
       }
};


// Update a person by ID
export const updatePersonById = async (req, res) => {
    try {
        const updatedPerson = await People.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedPerson) return res.status(404).json({ message: 'Person not found' });
        res.status(200).json(updatedPerson);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


export const deletePersonById = async (req, res) => {
    try {
        const deletedPerson = await People.findByIdAndDelete(req.params.id);
        if (!deletedPerson) return res.status(404).json({ message: 'Person not found' });
        res.status(200).json({ message: 'Person deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};