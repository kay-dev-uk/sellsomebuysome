const mongoose = require('mongoose');
const User = require('./models/User');


const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://kaydevuk:5lbEKVAbvn0bYeE1@sellsomebuysomedb.0mmdlz9.mongodb.net/', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');

      // const user = new User({
      //   name: 'John Doe',
      //   email: 'user@example.com',
      //   age: 25,
      // });
      // await user.save();
      // console.log('Default user created');

  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

module.exports = connectDB;

// mongodb+srv://kaydevuk:5lbEKVAbvn0bYeE1@sellsomebuysomedb.0mmdlz9.mongodb.net/?retryWrites=true&w=majority
