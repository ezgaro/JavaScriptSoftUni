function mapErrors(err) {
  if (Array.isArray(err)) {
    return err;
  } else if (err.name == "ValidationError") {
    return Object.values(err.errors).map((e) => ({ msg: e.message }));
  } else if (typeof err.message == "string") {
    return [
      {
        msg: err.message,
      },
    ];
  } else {
    return [{ msg: "Request error" }];
  }
}

function postViewModel(post) {
  if (!post.votes) {
    console.error("post.votes is undefined", post);
    post.votes = [];
  }

  // Filter out null values from the votes array
  const validVotes = post.votes.filter(vote => vote !== null);


  return {
    _id: post._id,
    title: post.title,
    keyword: post.keyword,
    location: post.location,
    date: post.date,
    image: post.image,
    description: post.description,
    author: authorViewModel(post.author),
    votes: validVotes.map(voterViewModel),
    rating: post.rating,
  };
};

function authorViewModel(user) {
  return {
    _id: user._id,
    firstName: user.firstName,
    lastName: user.lastName
  }
};

function voterViewModel(user) {
  return {
    _id: user._id,
    email: user.email,
  };
}

module.exports = { mapErrors, postViewModel };
