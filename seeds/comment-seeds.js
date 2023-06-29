const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'This looks great!',
    user_id: 1,
    post_id: 1
  },
  {
    comment_text: 'Awesome blog :)',
    user_id: 2,
    post_id: 2
  },
  {
    comment_text: 'Wonderful insights!',
    user_id: 3,
    post_id: 3
  },
  {
    comment_text: 'Keep it up, amazing work!',
    user_id: 3,
    post_id: 4
  },
  {
    comment_text: 'This is really great, what an informative blog post',
    user_id: 4,
    post_id: 5
  },
  {
    comment_text: 'I totally agree with this...',
    user_id: 5,
    post_id: 1
  },
  {
    comment_text: 'I agree, 100%!',
    user_id: 2,
    post_id: 2
  },
  {
    comment_text: 'Made my day!',
    user_id: 3,
    post_id: 1
  },
  {
    comment_text: 'Yes, that is soooo true.',
    user_id: 4,
    post_id: 1
  },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;