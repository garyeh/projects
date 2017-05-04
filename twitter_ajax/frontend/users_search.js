const FollowToggle = require('./follow_toggle');
const APIUtil = require("./api_util");

class UsersSearch {
  constructor(el) {
    this.$el = $(el);
    this.$input = $('.users-search input');
    this.$ul = $('.users');
    this.handleInput();
  }

  handleInput() {
    this.$el.on('input', (e) => {
      const search = this.$input.val();
      APIUtil.searchUsers(search).then(res => {
        this.renderResults(res);
      });
    });
  }

  renderResults(res) {
    this.$ul.children().remove();
    res.forEach((el) => {
      const $button = $('<button>').addClass('follow-toggle');
      let follow = (el.followed === true) ? "followed" : "unfollowed";
      let options = { userId: el.id, followState: follow };
      new FollowToggle($button, options);
      const $li = $(`<li> ${el.username} </li>`).append($button);
      this.$ul.append($li);
    });
  }
}

module.exports = UsersSearch;
