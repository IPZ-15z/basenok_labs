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

  render(ctx) {
    this.ctx.textAlign = "left";
    this.board.render(ctx);
    const beermanPos = this.chars[0].pos;
    this.chars.forEach((char, idx) => {
      char.render(ctx);
      if (idx >= 1 && this.checkCollision(char.pos, beermanPos)) {
        if (this.chars[0].poweredUp) {
          char.die(ctx);
          this.score += 1000;
        } else {
          this.lives -= 1;
          this.chars[0].die(ctx);
          this.lostLife = true;
        }
      }
    });
    this.won = this.board.isEmpty();
    this.gameOver = (this.lives === 0);
  }

  
}
