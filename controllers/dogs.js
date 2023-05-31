const Dog = require('../models/dog');

let { PutObjectCommand } = require("@aws-sdk/client-s3");
let { s3Client } = require("../libs/sampleClient");



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
    console.log(req.file)
    const params = {
      Bucket: "bens-dog-photos-bucket", // The name of the bucket. For example, 'sample-bucket-101'.
      Key: req.file.originalname, // The name of the object. For example, 'sample_upload.txt'.
      Body: req.file.buffer, // The content of the object. For example, 'Hello world!".
      ContentType: 'image/jpeg'
    };

    const results = await s3Client.send(new PutObjectCommand(params));
    
    let dogUrl = `${process.env.S3_BASE_URL}bens-dog-photos-bucket/${req.file.originalname}`
    req.body.photoUrl = dogUrl
    let newDog = await Dog.create(req.body)
    res.json(newDog);
  } catch (err) {
    console.log("Error", err);
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