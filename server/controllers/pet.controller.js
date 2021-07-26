const Pet = require("../models/pet.models");

// Create
module.exports.createOne = (req, res) => {
    Pet.create(req.body)
        .then(addPet => res.json(addPet))
        .catch(err => res.json({message: "Something went wrong when creating a Pet!", error: err}))
}

// Read all
module.exports.findAll = (req, res) => {
    Pet.find()
        .then(allPets => res.json(allPets))
        .catch(err => res.json({message: "Something when wrong when finding all Pets", error: err}))
}

// Read one
module.exports.findOnePet = (req, res) => {
    Pet.findOne({_id: req.params._id})
        .then(onePet => res.json(onePet))
        .catch(err => res.json({message: "Something when wrong when finding one Pet", error: err}))
}

// Update
module.exports.updateOnePet = (req, res) => {
    Pet.updateOne({_id: req.params._id}, req.body, {runValidators: true})
        .then(onePet => res.json(onePet))
        .catch(err => res.json({message: "Something when wrong when updating one Pet", error: err}))
}

// Delete
module.exports.deleteOnePet = (req, res) => {
    Pet.deleteOne({_id: req.params._id})
        .then(res.json({message: "Pet deleted!"}))
        .catch(err => res.json({message: "Something when wrong when deleting one Pet", error: err}))
}