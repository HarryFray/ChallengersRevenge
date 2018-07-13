const mongoose = require('mongoose');

const CompanySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  post: [{
    type: Schema.Types.ObjectId,
    ref: 'post',
  }],
});

const Post = mongoose.model('post', CompanySchema);
