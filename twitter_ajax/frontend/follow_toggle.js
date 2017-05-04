const APIUtil = require("./api_util");

class FollowToggle {
  constructor(el, options) {
    this.$el = $(el);
    this.userId = this.$el.data('user-id') || options.userId;
    this.followState = this.$el.data('initial-follow-state')
      || options.followState;
    this.render();
    this.handleClick();
  }

  render() {
    if (this.followState === "following" ||
    this.followState === "unfollowing") {
      this.$el.prop('disabled', true);
      this.$el.html('Pending!');
    } else if (this.followState === "unfollowed") {
      this.$el.prop('disabled', false);
      this.$el.html('Follow!');
    } else {
      this.$el.prop('disabled', false);
      this.$el.html('Unfollow!');
    }
  }

  handleClick() {
    this.$el.on('click', (el) => {
    el.preventDefault();

    if (this.followState === "unfollowed") {
      this.followState = "following";
      this.render();
      APIUtil.followUser(this.userId)
        .then(function() {
          this.followState = "followed";
          this.render();
        }.bind(this));
    } else {
      this.followState = "unfollowing";
      this.render();
      APIUtil.unfollowUser(this.userId)
        .then(function() {
          this.followState = "unfollowed";
          this.render();
        }.bind(this));
    }
    });
  }

}

module.exports = FollowToggle;
