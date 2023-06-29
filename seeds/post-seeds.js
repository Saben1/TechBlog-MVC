const { Post } = require('../models');

const postdata = [
  {
    title: 'Iphone vs Android',
    post_text: 'I tend to lean towards Iphone just because I am hooked on the Apple ecosystem but Google is rising as a great contender.',
    user_id: 1
  },
  {
    title: 'AI vs Employees',
    post_text: 'Not long before we are all replaced by robots!',
    user_id: 2
  },
  {
    title: 'I love coding!',
    post_text: 'It has been tough but all worth it in the end.',
    user_id: 3
  },
  {
    title: 'Gaming is not just for nerds',
    post_text: 'Who is with me on this? All people game!',
    user_id: 4
  },
  {
    title: 'Black Friday Sale has been a let down.',
    post_text: 'Not much deals eh?',
    user_id: 5
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;