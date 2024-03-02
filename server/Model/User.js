const mongoose = require('mongoose');

// MongoDB Atlas connection string
const uri = 'mongodb+srv://sengineer804:maaz1234@cluster0.197khlz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// Connect to MongoDB Atlas
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB Atlas');
}).catch(err => {
  console.error('Error connecting to MongoDB Atlas:', err);
});

// Define and export your Mongoose model
const RegisterSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});

const RegisterModel = mongoose.model('user', RegisterSchema);

module.exports = RegisterModel;
