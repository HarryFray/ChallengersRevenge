const graphql = require('graphql');
const mongoose = require('mongoose');
const PostModal = require('../db/post.model');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
  GraphQLID,
  GraphQLInt,
  GraphQLFloat
} = graphql;

const Post = mongoose.model('post');


const PostType = new GraphQLObjectType({
  name: 'PostType',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    content: { type: GraphQLString },
    stars: { type: GraphQLInt },
    date: { type: GraphQLString }
  }),
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    posts: {
      type: new GraphQLList(PostType),
      resolve() {
        return Post.find({});
      },
    },
    post: {
      type: PostType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parentValue, { id }) {
        return Post.findById(id);
      },
    },
  }),
});

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addPost: {
      type: PostType,
      args: {
        title: { type: GraphQLString },
        content: { type: GraphQLString },
      },
      resolve(parentValue, { title, content }) {
        return new Post({ title, content }).save();
      },
    },
    likePost: {
      type: PostType,
      args: { id: { type: GraphQLID } },
      resolve(parentValue, { id }) {
        return Post.like(id);
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation,
});
