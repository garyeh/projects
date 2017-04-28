/* Game.prototype.run
  until one tower other than starting tower has 3 discs
    get move
    make move if valid move
  end
*/

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Game {
  constructor() {
    this.stacks = [[1],[3,2],[]];
  }

  promptMove (callback, completionCallback) {
    this.print();
    reader.question('Choose a move [from]):', (startTowerIdx) => {
      reader.question('Choose a move [to]):', (endTowerIdx) => {
        callback.call(this, startTowerIdx, endTowerIdx);

        if (this.isWon()) {
          completionCallback();
          this.print();
          reader.close();
        } else {
          this.promptMove (callback, completionCallback);
        }
      });
    });
  }

  isValidMove (startTowerIdx, endTowerIdx) {
    let startTower = this.stacks[startTowerIdx];
    let endTower = this.stacks[endTowerIdx];
    if (startTower.length === 0) {
      return false;
    } else if (endTower.length === 0) {
      return true;
    } else if (startTower[startTower.length-1] > endTower[endTower.length-1]) {
      return false;
    } else {
      return true;
    }
  }

  move (startTowerIdx, endTowerIdx) {
    if (this.isValidMove(startTowerIdx, endTowerIdx)) {
      this.stacks[endTowerIdx].push(this.stacks[startTowerIdx].pop());
      return true;
    } else {
      console.log('Invalid move');
      return false;
    }
  }

  print () {
    console.log(JSON.stringify(this.stacks));
  }

  isWon () {
    if (this.stacks[0].length === 0 &&
      (this.stacks[1].length === 0 || this.stacks[2].length === 0)) {
        return true;
    }
    return false;
  }

  run (completionCallback) {
    this.promptMove(this.move, completionCallback);
  }
}

const g = new Game();
g.run(() => console.log('You win!'));
