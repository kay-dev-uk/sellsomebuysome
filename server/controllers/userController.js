const User = require('../models/User');

const createUser = async (req, res) => {
    console.log(req.body);
    try {
      const { name, email, age } = req.body;
      const user = new User({ name, email, age });
      await user.save();
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create user' });
    }
  };

const getUsers = async (req, res) => {

    try {
      const users = await User.find();
      const usersList = users.map((user) => {
        return {
          name: user.name,
          email: user.email,
          age: user.age
        };
      });
      res.json(usersList);
    } catch (error) {
      console.error('Error retrieving users:', error);
      res.status(500).json({ error: 'Failed to retrieve users' });
    }
  };

module.exports = {
  createUser, getUsers
};
