const db = require("../models/number.model")
const number = db.numbers
module.exports = {
  //Get all the numbers of a user
  async getAllnumbersOfUser(req, res) {
    try {
        const numberCollection = await number.findAll(req.params.userId, { include: ["Users"] });
        res.status(200).send(numberCollection)
      }catch (e) {
      console.log(e)
      res.status(500).send(e)
    }
  },
  //cretae a new number of a given user 
  async createnumber(req, res) {
    try {
      const number = await number.create({
        userId: req.body.userId,
        number: number
      })
      res.status(201).send(number)
    } catch (e) {
      console.log(e)
      res.status(500).send(e)
    }
  },
  // update number of a given user
  async updatenumber(req, res) {
    try {
      const numberCollection = await number.find({
        id: req.params.userId,
      })
      if (numberCollection) {
        const updatednumber = await numberCollection.update({
          number: updatednumber
        })
        res.status(201).send(updatednumber)
      } else {
        res.status(404).send("number Not Found")
      }
    } catch (e) {
      console.log(e)
      res.status(500).send(e)
    }
  },

// delete number of a given user
async deletenumber(req, res) {
  try {
    const numberCollection = await number.find({
      id: req.params.userId,
    })
    if (numberCollection) {
      const updatednumber = await numberCollection.destroy({
        number: updatednumber
      })
      res.status(200).send(updatednumber)
    } else {
      res.status(404).send("number Not Found")
    }
  } catch (e) {
    console.log(e)
    res.status(500).send(e)
  }
},
}