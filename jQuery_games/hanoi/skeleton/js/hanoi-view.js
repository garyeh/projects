class HanoiView {
  constructor(game, $el) {
    this.game = game;
    $el.append(this.setupTowers());
    this.startPileIndex = undefined;
    this.clickTower();
  }

  clickTower() {
    $("li").on("click", event => {
      const $li = $(event.currentTarget);
      if (this.startPileIndex === undefined) {
        this.startPileIndex = $li.data("index");

      } else {
        this.game.move(this.startPileIndex, $li.data("index"));
        this.startPileIndex = undefined;
      }
    });
    // $("li").addClass("hover");
  }

  setupTowers() {
    const $ul = $("<ul>");
    for (var i = 0; i < 3; i++) {
      const $li = $("<li>");
      // $li.data("discs", this.game.towers[i]);
      for (var j = 0; j < 3; j++) {
        const $span = $("<span>");
        if (this.game.towers[i][j] === undefined) {
          // $span.data("disc", 0);
        } else {
          // $span.data("disc", this.game.towers[i][j]);
          $span.html(this.game.towers[i][j]);
          $span.data("index", j);
          $span.addClass("disc");
        }
        $li.append($span);
      }

      $li.data("index", i);
      $ul.append($li);
      console.log($li.data("discs"));
    }
    return $ul;
  }

}

module.exports = HanoiView;
