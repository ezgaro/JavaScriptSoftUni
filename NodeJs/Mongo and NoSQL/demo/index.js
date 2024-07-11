const mongoose = require('mongoose');
const Post = require('./models/Post');
const Comment = require('./models/Comment');

const uri = "mongodb://localhost:27017/testdb";

async function main() {
  await mongoose.connect(uri);
  console.log("Db connected");

  const post = await Post.findOne({}).populate('comments', 'content');
  console.log(post.comments[0]);

  Comment.deleteMany({post: post_id});
}

main();
