const View = require("./ttt-view");
const Game = require("../../solution/game");

$( () => {
  let game = new Game();
  let $el = $('figure');
  let view = new View(game, $el);
});
