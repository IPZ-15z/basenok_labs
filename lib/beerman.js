const MovingObject = require('./moving_object');

const DEFAULTS = {
  dir: [1, 0],
  vel: 4,
  radius: 15,
  gridSize: 40,
  wallSize: 4
};

class Beerman extends MovingObject {
  constructor(options) {
    options.dir = DEFAULTS.dir;
    options.vel = DEFAULTS.vel;
    options.radius = DEFAULTS.radius;
    super(options);
    this.numBeers = 0;
    this.openMouth = true;
    this.poweredUp = false;
    this.numSteps = 0;
    this.dying = false;
  }

}

module.exports = Beerman;