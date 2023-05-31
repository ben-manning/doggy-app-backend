const express = require('express');
const router = express.Router();
const dogController = require('../controllers/dogs');
const multer = require('multer');

const upload = multer({
  storage: multer.memoryStorage()
});

// CRUD Routes RESTful
// GET all dogs
router.get('/', dogController.getAllDogs);
// POST create a dog
router.post('/', upload.single('picture'), dogController.createDog);
// GET one dog
router.get('/:id', dogController.getOneDog);
// PUT one dog
router.put('/:id', dogController.updateADog);
// DELETE one dog
router.delete('/:id', dogController.removeADog);

module.exports = router;