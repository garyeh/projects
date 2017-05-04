/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const FollowToggle = __webpack_require__(1);
const UsersSearch = __webpack_require__(3);
const TweetCompose = __webpack_require__(4);

$( () => {
  $('.follow-toggle').each( (_, el) => {
    new FollowToggle(el);
  });

  $('.users-search').each( (_, el) => {
    new UsersSearch(el);
  });

  new TweetCompose($('.tweet-compose'));
});


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

const APIUtil = __webpack_require__(2);

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


/***/ }),
/* 2 */
/***/ (function(module, exports) {

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


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

const FollowToggle = __webpack_require__(1);
const APIUtil = __webpack_require__(2);

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


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

const APIUtil = __webpack_require__(2);

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


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map