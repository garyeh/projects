const APIUtil = require("./api_util");

class TweetCompose {
  constructor($el) {
    this.$el = $el;
    this.charleft();
    this.submit();
  }

  submit() {
    this.$el.on('submit', (e) => {
      e.preventDefault();
      let data = $(e.currentTarget).serializeJSON();
      $(':input').prop('disabled',true);
      APIUtil.createTweet(data).
        then( (res) => {
          this.handleSuccess(res);
        });
    });
  }

  clearInput() {
    $('textarea').val("");
    $('strong').html("");
  }

  handleSuccess(res) {
    this.clearInput();
    $(':input').prop('disabled',false);
    const newTweet = JSON.stringify(res);
    const $li = $(`<li>${newTweet}</li>`);
    $('ul#feed').append($li);
  }

  charleft() {
    this.$el.on('keyup', (e) => {
      let left = $('textarea').val().length;
      $('strong').html(`${140 - left} characters left`);
    });
  }
}

module.exports = TweetCompose;
