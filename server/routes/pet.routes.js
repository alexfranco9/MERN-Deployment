const PetController = require("../controllers/pet.controller");

module.exports = app => {
        // Create pet.
        app.post("/api/pet/create", PetController.createOne);
        // Read all pets.
        app.get("/api/pets", PetController.findAll);
        // Read one pet.
        app.get("/api/pet/:_id", PetController.findOnePet);
        // Update pet.
        app.put("/api/pet/update/:_id", PetController.updateOnePet);
        // Delete pet.
        app.delete("/api/pet/delete/:_id", PetController.deleteOnePet);
}