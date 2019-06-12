/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

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
// 画布设置函数
const setup = () => {
  // 创建 Canvas
  canvas = createCanvas(720, 480);

  // 将画布居中
  canvas.position((windowWidth - width) / 2, (windowHeight - height) / 2)

  // 创建一个Div 用于放置button
  buttonDiv = createDiv('')
  buttonDiv.class('bottom')

  // 创建速度控制按钮
  rateButton = createSlider(1, 60, 30, 1); // 滑块 min max value step
  rateButtonLabel = createP('frame rate 0 fps')
  rateButton.class('slider')
  rateButtonLabel.class('slider-label')
  rateButtonLabel.parent(buttonDiv)
  rateButton.parent(buttonDiv)

  // 清除按钮
  clearButton = createButton('清除')
  clearButton.mousePressed(clearAll)
  clearButton.class('clear-btn')
  clearbutton.parent(buttonDiv)

  // 随机生成按钮
  randomButton = createButton('随机生成矩阵')
  randomButton.mousePressed(randomRect)
  randomButton.class('random-btn')
  randomButton.parent(buttonDiv)

  // 提示框
  promBox = createP('提示')
  promBox.class('game-instruction')
  // 状态提示框
  statusBox = create('暂停')
  statusBox.class('status-label')

  // 初始化棋盘
  board = new Array(24)
  for (let i = 0; i < board.length; i++) {
    board[i] = new Array(36)
  }
  init()
  // 初始化完后就结束，不再进行渲染
  noLoop();
}

const init = () => {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      board[i][j] = 0
    }
  }

  const clearAll = () => {
    if (!paused) {
      paused = true
    }
    init()
    redraw()
  }
  // 生成随机数 0 1 
  const randomRect = () => {
    if (!paused) {
      paused = true
    }
    for (let i = 0; i < 24; i++) {
      for (let j = 0; j < 36; j++) {
        board[i][j] = floor(random(2))
      }
    }
    redraw()
  }
}

// 画图函数，和 python 的 matplotlib 类似
const draw = () => {
  background(255)
  for (let i = 0; i < 24; i++) {
    for (let j = 0; j < 36; j++) {
      if (board[i][j] === 1) {
        fill(0)
      } else {
        fill(255)
      }
      stroke(0)
      rect(j * 20, i * 20, 19, 19)
    }
  }
  if (!paused) {
    board = gameOfLife(board)
    statusBox.html("Running")
    statusBox.class('status-label running')
  } else {
    statusBox.html('Paused')
    statusBox.class('status-label paused')
  }
  const rate = rateButton.value()
  frameRate(rate)
  rateButtonLabel.html(`frame rate: ${paused ? 0 : fr} fps`)

}

const doLoop = () => {
  if (paused) {
    loop()
    paused = false
  } else {
    npLoop()
    paused = true
  }
}

const mouseClicked = () => {
  const i = floor(mouseY / 20);
  const j = floor(mouseX / 20);
  if (j >= 36 || i >= 24 || i < 0 || j < 0 || !paused) {
    return;
  }
  board[i][j] = board[i][j] === 1 ? 0 : 1;
  redraw();
}

const keyPressed = () => {
  if (keyCode == 32) {
    handleLoop()
    return false; // prevent default
  }
}