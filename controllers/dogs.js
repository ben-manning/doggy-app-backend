const Dog = require('../models/dog')


const getAllDogs = async (req, res) => {
  try {
    let allDogs = await Dog.find({});
    res.json(allDogs);
  } catch {
    res.json({ msg: 'There was a problem getting all the dogs'});
  }
}

const createDog = async (req, res) => {
  try {
    let newDog = await Dog.create(req.body)
    res.json(newDog);
  } catch {
    res.json({ msg: 'There was an error making your dog'});
  }
}

const getOneDog = async (req, res) => {
  console.log(req.params.id)
  try {
    let dog = await Dog.findById(req.params.id);
    res.json(dog)
  } catch {
    res.json({ msg: 'There was an error getting your dog'});
  }
}

const updateADog = async (req, res) => {
  try {
    let updatedDog = await Dog.findByIdAndUpdate(req.params.id, { $set: { name: req.body.name }}, { new: true });
    res.json(updatedDog)
  } catch {
    res.json({ msg: 'There was a problem updating your dog!'});
  }
}

const removeADog = async (req, res) => {
  try {
    await Dog.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Your dog has been successfully adopted'});
  } catch {
    res.json({ msg: 'There was an error deleting your dog'});
  }
}

module.exports = {
  getAllDogs,
  createDog,
  getOneDog,
  updateADog,
  removeADog
}