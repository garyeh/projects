const FollowToggle = require("./follow_toggle");
const UsersSearch = require("./users_search");
const TweetCompose = require("./tweet_compose");

$( () => {
  $('.follow-toggle').each( (_, el) => {
    new FollowToggle(el);
  });

  $('.users-search').each( (_, el) => {
    new UsersSearch(el);
  });

  new TweetCompose($('.tweet-compose'));
});
