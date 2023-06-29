const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'sabin',
    password: 'password'
  },
  {
    username: 'alishma',
    password: 'password'
  },
  {
    username: 'sajina',
    password: 'password'
  },
  {
    username: 'subash',
    password: 'password'
  },
  {
    username: 'ramesh',
    password: 'password'
  },
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;