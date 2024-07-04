const User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.register = (req, res) => {
  const { username, password } = req.body;

  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      res.status(500).send({ message: 'Error hashing password' });
      return;
    }

    const newUser = new User({
      username,
      password: hashedPassword,
    });

    User.create(newUser, (err, data) => {
      if (err) {
        res.status(500).send({ message: 'Error creating user' });
        return;
      }

      res.send({ message: 'User registered successfully' });
    });
  });
};

exports.login = (req, res) => {
  const { username, password } = req.body;

  User.findByUsername(username, (err, user) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({ message: 'User not found' });
      } else {
        res.status(500).send({ message: 'Error retrieving user' });
      }
      return;
    }

    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err || !isMatch) {
        res.status(401).send({ message: 'Invalid password' });
        return;
      }

      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
        expiresIn: '1h',
      });

      res.send({ message: 'Login successful', token });
    });
  });
};
