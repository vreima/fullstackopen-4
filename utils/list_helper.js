let _ = require("lodash");

const dummy = (blogs) => {
  return 1;
};

const totalLikes = (blogs) => {
  return blogs.reduce((sum, blog) => sum + blog.likes, 0);
};

const favoriteBlog = (blogs) => {
  if (blogs.length < 1) return null;

  return blogs.reduce(
    (favorite, blog) => (favorite.likes < blog.likes ? blog : favorite),
    blogs[0]
  );
};

const mostBlogs = (blogs) => {
  if (blogs.length < 1) return null;

  const countByAuthor = _.countBy(blogs, "author");
  const listOfAuthors = [];
  for (let [key, value] of Object.entries(countByAuthor)) {
    listOfAuthors.push({ author: key, blogs: value });
  }

  return _.last(_.sortBy(listOfAuthors, "blogs"));
};

const mostLikes = (blogs) => {
  if (blogs.length < 1) return null;

  const listOfAuthors = [];
  for (let [key, value] of Object.entries(_.groupBy(blogs, "author"))) {
    const likes = totalLikes(value);
    listOfAuthors.push({ author: key, likes: likes });
  }

  return _.last(_.sortBy(listOfAuthors, "likes"));
};

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes,
};
