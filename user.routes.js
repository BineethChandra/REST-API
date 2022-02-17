const express = require('express');
const router = express.Router();


const userController = require("../controller").user
const numberController = require("../controller").post

  router.get("/", userController.getAllUsers)
  router.post("/create", userController.create)
  router.put("/:userId", userController.update)
  router.get("/:userId/numbers", numberController.getAllnumbersOfUser)
  router.post("/number/:userId", numberController.createnumber)
  router.put("number/:userId", numberController.update)

  module.exports = router