const mongoose = require("mongoose");
require("dotenv").config();

const USER_NAME = process.env.USER_NAME;
const USER_PASSWORD = process.env.USER_PASSWORD;

module.exports = ()=>(mongoose.connect(`mongodb+srv://${USER_NAME}:${USER_PASSWORD}@flipkart-clone.gycyd.mongodb.net/flipkart-clone`))
