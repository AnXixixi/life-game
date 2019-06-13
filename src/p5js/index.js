
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

// 用 部分es6 语法会报错，查询文档 p5js 对es6的支持不高，需要编译。

let canvas // canvas画布
let buttonDiv // div button
let rateButton // 速度控制按钮
let rateButtonLabel // 按钮标签
let clearButton // 清除按钮
let randomButton // 随机生成按钮
let board //二维矩阵，相当于棋盘
let promBox // 提示框
let statusBox // 状态框
let paused = true // 开始时是暂停的
let startButton // 开始暂停 Button
function setup() {

  canvas = createCanvas(720, 480);

  canvas.position((windowWidth - 1320) / 2, (windowHeight - 560) / 2);

  divCell = createDiv('');
  divCell.class('cel');

  rateButton = createSlider(1, 60, 30, 1);
  rateButtonLabel = createP('速度从1-60由慢到快');
  rateButton.class('slider');
  rateButtonLabel.class('slider-label');
  rateButtonLabel.parent(divCell);
  rateButton.parent(divCell);

  clearButton = createButton('清空');
  clearButton.mousePressed(clearAll);
  clearButton.class('clear-btn');
  clearButton.parent(divCell);

  randomButton = createButton('随机细胞群');
  randomButton.mousePressed(randomCell);
  randomButton.class('random-btn');
  randomButton.parent(divCell);

  startButton = createButton('开始/暂停');
  startButton.mousePressed(startAndParseGame);
  startButton.class('clear-btn');
  startButton.parent(divCell);

  promBox = createP('生命细胞游戏：设置细胞群，点击空格游戏开始');
  promBox.class('prom-box');

  statusBox = createP('暂停');
  statusBox.class('status-label')

  board = new Array(24);
  for (let row = 0; row < 24; ++row) {
    board[row] = new Array(36);
  }

  init();
  noLoop();
}


function clearAll() {
  if (!paused) paused = true;
  init();
  redraw();
}


function randomCell() {
  if (!paused) paused = true;
  for (let i = 0; i < 24; i++) {
    for (let j = 0; j < 36; j++) {
      // 随机1或者0
      board[i][j] = floor(random(2));
    }
  }
  redraw();
}

function draw() {
  background(225,255,255);
  for (let i = 0; i < 24; i++) {
    for (let j = 0; j < 36; j++) {
      if ((board[i][j] == 1)) fill(255,0,0);
      else fill(225,255,255);
      stroke(0);
      rect(j * 20, i * 20, 20 - 1, 20 - 1);
    }
  }
  if (!paused) {
    board = gameOfLife(board);
    statusBox.html('游戏继续');
    statusBox.class('game-status running');
  } else {
    statusBox.html('游戏暂停');
    statusBox.class('game-status paused');
  }

  const rate = rateButton.value();
  frameRate(rate);
  rateButtonLabel.html(`速度: ${paused ? 0 : rate} 单位速度`);
}

function init() {
  for (let i = 0; i < 24; i++) {
    for (let j = 0; j < 36; j++) {
      // 随机1或者0
      board[i][j] = 0;
    }
  }
}

function handleLoop() {
  if (paused) {
    loop();
    paused = false;
  } else {
    noLoop();
    paused = true;
  }
}

function mouseClicked() {
  const i = floor(mouseY / 20);
  const j = floor(mouseX / 20);
  if (j >= 36 || i >= 24 || i < 0 || j < 0 || !paused) {
    return;
  }
  board[i][j] = board[i][j] === 1 ? 0 : 1;
  redraw();
}

function keyPressed() {
  if (keyCode == 32) {
    handleLoop()
    return false;
  }
}

function startAndParseGame() {
  handleLoop()
  return false
}