const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'john',
    password: 'password'
  },
  {
    username: 'carl',
    password: 'password'
  },
  {
    username: 'sabrina',
    password: 'password'
  },
  {
    username: 'tyler',
    password: 'password'
  },
  {
    username: 'alex',
    password: 'password'
  },
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;