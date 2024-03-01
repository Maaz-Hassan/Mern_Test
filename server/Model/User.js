var mongoose = require("mongoose")



var RegisterSchema = new mongoose.Schema({
    name: String,
    email:String,
    password:String
})

const RegisterModel = mongoose.model("user", RegisterSchema);

module.exports = RegisterModel;