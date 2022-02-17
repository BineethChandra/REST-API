const db = require("../models/user.model")
const User = db.Users
module.exports = {
  //get all the users info 
  async getAllUsers(req, res) {
    try {
      const userCollection = await User.findAll(req.params.userId, { include: ["numbers"] });
      res.status(201).send(userCollection)
    } catch (e) {
      console.log(e)
      res.status(500).send(e)
    }
  },
  // get a user info using id along with their numbers
  async getUser(req, res) {
    try {
      const userCollection = await User.findByPk(req.params.userId, { include: ["numbers"] });
      res.status(201).send(userCollection)
    } catch (e) {
      console.log(e)
      res.status(500).send(e)
    }
  },
    //create and save new users
  async createUser(req, res) {
    try {
      const userCollection = await User.create({
        userId: req.body.userId,
        name: req.body.name,
        email: req.body.email,
        age: req.body.age,
      })
      res.status(201).send(userCollection)
    } catch (e) {
      console.log(e)
      res.status(400).send(e)
    }
  },
  //updating a user info 
  async update(req, res) {
    try {
      const userCollection = await User.find({
        userId: req.params.userId,
      })
      if (userCollection) {
        const updatedUser = await User.update({
          userId: req.body.email,
        })
        res.status(201).send(updatedUser)
      } else {
        res.status(404).send("User Not Found")
      }
    } catch (e) {
      console.log(e)
      res.status(500).send(e)
    }
  },
}