require("dotenv").config()
const { CONNECTION_STRING } = process.env
const Sequelize = require("sequelize")

const sequelize = new Sequelize(CONNECTION_STRING, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false
    }
  }
})

module.exports = {
  getInputs: (req, res) => {
    sequelize
      .query(`select * from input;`)
      .then((dbRes) => res.status(200).send(dbRes[0]))
      .catch((err) => console.log("GETTING", err))
  },
  createInput: (req, res) => {
    let { text } = req.body

    sequelize
      .query(
        `insert into input (text)
            values ('${text}');`
      )
      .then((dbRes) => res.status(200).send(dbRes[0]))
      .catch((err) => console.log("POSTING", err))
  }
}
