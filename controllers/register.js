const fs = require("fs")
const fsp = fs.promises

exports.getRegister = (req, res) => {
    //send the welcome page, option to login
    res.status(200).send("<h1>WORKING</h1>")
}

exports.postRegister = (req, res) => {
    res.status(201)

}