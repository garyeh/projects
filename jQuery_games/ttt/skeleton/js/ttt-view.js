class View {
  constructor(game, $el) {
    $el.append(this.setupBoard());
    this.game = game;
    this.bindEvents();
  }

  bindEvents() {
    $("li").on("click", event => {
      const $li = $(event.currentTarget);
      this.makeMove($li);
    });
    $("li").addClass("hover");
  }

  makeMove($square) {
    try {
      this.game.playMove($square.data("pos"));
      $square.addClass("white");
      console.log(this.game.currentPlayer);
      $square.text(this.game.currentPlayer);
    } catch(err) {
      alert('Invalid move.');
    }
    if (this.game.isOver() && this.game.winner()) {
      $("li").removeClass("white");
      $("li").removeClass("hover");
      alert(`${this.game.currentPlayer} wins.`);
      $("li").off("click");
      this.colorWinners();
    } else if (this.game.isOver()) {
      $("li").addClass("draw");
      alert('Draw!');
    }
  }

  colorWinners() {

    $("li").each((_, li) => {
      console.log($(li).text());
      if ($(li).text() === this.game.currentPlayer) {
        $(li).addClass("winner");
      } else {
        $(li).addClass("white");
      }
    });
  }

  setupBoard() {
    const $ul = $("<ul>");
    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 3; j++) {
        const $li = $("<li>");
        $li.data("pos", [i,j]);
        $ul.append($li);
      }
    }
    return $ul;
  }
}

module.exports = View;
