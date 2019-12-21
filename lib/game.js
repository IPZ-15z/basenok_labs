const Beerman = require('./beerman');
const Ghost = require('./ghost');
const DEFAULTS = {
  bmanVel: 4,
  ghostVel: 2,
  gridSize: 40,
  wallSize: 4,
  lives: 2,
  bmanDir: [1, 0],
  ghostDir: [-1, 0]
};

class Game {

  constructor(ctx, board) {
    this.defaultCharPos = [[320, 360], [240, 240], [280, 240], [320, 240], [360, 240]];
    const beerman = new Beerman({ pos: this.defaultCharPos[0], color: "#FFFF00", board });
    const blinky = new Ghost({ pos: this.defaultCharPos[1], color: "#FF0000", board, beerman, name: "blinky" });
    const pinky = new Ghost({ pos: this.defaultCharPos[2], color: "#FF69B4", board, beerman, name: "pinky" });
    const inky = new Ghost({ pos: this.defaultCharPos[3], color: "#00FFFF", board, beerman, name: "inky", blinky: blinky });
    const clyde = new Ghost({ pos: this.defaultCharPos[4], color: "#FFA500", board, beerman, name: "clyde" });
    this.ctx = ctx;
    this.board = board;
    this.chars = [beerman, blinky, pinky, inky, clyde];
    this.gameOver = false;
    this.won = false;
    this.score = 0;
    this.powerTimer = 0;
    this.lives = DEFAULTS.lives;
    this.lostLife = false;
    this.render(ctx);
  }

  
}
