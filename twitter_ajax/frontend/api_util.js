const APIUtil = {
  followUser: id => {
    return $.ajax({
      type: 'POST',
      url: `/users/${id}/follow`,
      dataType: 'json',
    });
  },

  unfollowUser: id => {
    return $.ajax({
      type: 'DELETE',
      url: `/users/${id}/follow`,
      dataType: 'json',
    });
  },

  searchUsers: (query, success) => {
    return $.ajax({
      url: `/users/search`,
      dataType: 'json',
      data: { query },
      success: success
    });
  },

  createTweet: (data) => {
    return $.ajax({
      type: 'POST',
      url: `/tweets`,
      data: data,
      dataType: 'json'
    });
  }
};

module.exports = APIUtil;
