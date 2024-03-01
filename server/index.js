var mongoose = require("mongoose")
var express = require("express")
var cors = require("cors")
var RegisterModel = require("./Model/User")

var app = express()

app.use(cors(
    {
        origin:["https://mern-test-frontend-five.vercel.app"],
        methods:["POST", "GET"],
        credentials: true
    }
))
app.use(express.json())

mongoose.connect("mongodb+srv://sengineer804:maaz1234@cluster0.197khlz.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0")


app.get('/', (req, res) => {
    res.json("Hello World")
})

app.post('/register', (req, res) => {
    const {name, email, password} = req.body;
    RegisterModel.findOne({email: email})
    .then(user => {
        if(user) {
            res.json("User already Registered")
        }
        else{
            RegisterModel.create({name:name, email:email, password:password})
            .then(result => {
                res.json("User Registered succefully")
            })
            .catch(err => res.json(err))
        }
    })
    .catch(err => {res.json(err)})
})

app.post('/login', (req, res) => {
    const {email, password} = req.body;
    RegisterModel.findOne({email:email})
    .then(user => {
        if(user){
            RegisterModel.findOne({password:password})
            .then(pass => {
                if(pass){
                    res.json("Login Successfully")
                }
                else{
                    res.json("Incorrect Passowrd")
                }
            })
        }
        else{
            res.json("Incorrect Email");
        }
    })
});




app.listen(3001, () => {
    console.log("Server is running")
})