/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

let canvas // canvas画布
let buttonDiv // div button
let rateButton // 速度控制按钮
let rateButtonLabel // 按钮标签
let clearButton // 清除按钮
let randomButton // 随机生成按钮
// 画布设置函数
function setup() {
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
 clearButton.mousePressed(clearScene)
 clearButton.class('clear-btn')
 clearbutton.parent(buttonDiv)

  // 随机生成按钮
  randomButton = createButton('随机生成矩阵')
  randomButton.mousePressed(randomScene)
  randomButton.class('random-btn')
  randomButton.parent(buttonDiv)

  // 提示框

  // 状态提示框
  
}