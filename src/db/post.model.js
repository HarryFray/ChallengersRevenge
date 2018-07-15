const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: { type: String },
  stars: { type: Number, default: 0 }
});

PostSchema.statics.like = function (id) {
  const Post = mongoose.model('post');

  return Post.findById(id)
    .then(post => {
      ++post.stars;
      return post.save();
    })
}

const Post = mongoose.model('post', PostSchema);
