// 逻辑部分

// 初始化矩阵
const init = board => {
  if (board.length === 0) {
    return
  }
  let newBoard = []
  for (let i = 0, len = board.length; i < len; i++) {
    newBoard[i] = [0, ...board[i], 0]
  }
  let arr = new Array(board[0].length + 2).fill(0)
  newBoard = [arr, ...newBoard, arr]
  return newBoard
}

// 1. 周围3个1，则1->1 0->1
// 2. 周围2个1，则1->1 0->0
// 3. 周围0个1，1个1，则1->0 0->0

// 开始函数
const gameOfLife = board => {
  board = init(board)
  // 开辟新数组保存状态 每次穿进去的是初始化后的棋盘，为了考虑边界
  let newBoard = new Array(board.length-2);
  for (let i = 0, len = board.length - 2; i < len; i++) {
    newBoard[i] = new Array(board[0].length - 2)
  }

  for (let i = 1; i <= board.length - 2; i++) {
    for (let j = 1; j <= board[0].length - 2; j++) {
      let theAliveNumbers = calAliveNum([i, j], board)
      if (board[i][j] === 1) {
        newBoard[i - 1][j - 1] = aliveStatus(theAliveNumbers)
      } else {
        newBoard[i - 1][j - 1] = dieStatus(theAliveNumbers)
      }
    }
  }
  return newBoard
}

// 细胞死亡时的下一状态
const dieStatus = aliveNumber => {
  if (aliveNumber === 3) {
    return 1
  } else {
    return 0
  }
}

// 细胞存活时下一状态
const aliveStatus = aliveNumber => {
  if (aliveNumber === 2 || aliveNumber === 3) {
    return 1
  } else {
    return 0
  }
}

// 输入目标和整个矩阵，返回活着的细胞数量
const calAliveNum = (cur, board) => {
  let cenX = cur[0]
  let cenY = cur[1]
  let aliveNumber = 0;
  for (let i = cenX - 1; i <= cenX + 1; i++) {
    for (let j = cenY - 1; j <= cenY + 1; j++) {
      if (board[i][j] === 1) {
        aliveNumber += 1;
      }
    }
  }
  aliveNumber -= board[cenX][cenY];
  return aliveNumber;
}

export {
  gameOfLife,
  init,
  dieStatus,
  aliveStatus,
  calAliveNum
}
