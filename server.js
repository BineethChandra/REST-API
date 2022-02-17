const express = require("express")
const Sequelize = require("sequelize");
const bodyParser = require("body-parser")
const db = require("./models");
const users = require('./routers/user.routes');
const app = express()

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/user', users)


const run = async () => {
};
// db.sequelize.sync();
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
  run();
});


const PORT = 3000
app.listen(PORT, () => {
  console.log(`Server is listening to port ${PORT}`)
})