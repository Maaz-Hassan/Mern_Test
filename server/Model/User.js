var mongoose = require("mongoose")

mongoose.connect("mongodb+srv://sengineer804:maaz.123@cluster0.197khlz.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0")

var RegisterSchema = new mongoose.Schema({
    name: String,
    email:String,
    password:String
})

const RegisterModel = mongoose.model("user", RegisterSchema);

module.exports = RegisterModel;