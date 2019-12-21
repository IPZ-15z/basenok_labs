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

