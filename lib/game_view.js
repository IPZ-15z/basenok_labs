const Board = require('./board');
const Game = require('./game');

const keyBinds = {
  "W": [0, -1],
  "A": [-1, 0],
  "S": [0, 1],
  "D": [1, 0],
  "ARROWUP": [0, -1],
  "ARROWLEFT": [-1, 0],
  "ARROWDOWN": [0, 1],
  "ARROWRIGHT": [1, 0]
};

const BOARD_X = 645;
const CANVAS_X = 800;
const CANVAS_Y = 645;

class GameView {
  constructor(ctx) {
    this.ctx = ctx;
    this.board = new Board({
      pos: [0, 0],
      width: BOARD_X,
      height: CANVAS_Y
    });
    this.game = new Game(this.ctx, this.board);
    this.isPaused = false;
    this.restartBuffer = 0;
    this.restarted = false;
    document.addEventListener('keydown', this.bindKeyHandlers.bind(this));
    this.start();
  }

}


module.exports = GameView;