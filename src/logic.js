// 逻辑部分

// 初始化矩阵
const extendTheBoard = extendBoard => {
  if (extendBoard.length === 0) {
    return
  }
  let extendedBoard = []
  for (let i = 0, len = extendBoard.length; i < len; i++) {
    extendedBoard[i] = [0, ...extendBoard[i], 0]
  }
  let arr = new Array(extendBoard[0].length + 2).fill(0)
  extendedBoard = [arr, ...extendedBoard, arr]
  return extendedBoard
}

// 1. 周围3个1，则1->1 0->1
// 2. 周围2个1，则1->1 0->0
// 3. 周围0个1，1个1，则1->0 0->0

// 开始函数
const gameOfLife = gameBoard => {
  let extendedBoard = extendTheBoard(gameBoard)
  // 开辟新数组保存状态 每次穿进去的是初始化后的棋盘，为了考虑边界
  let gameBoardRows = gameBoard.length;
  let gamaBoardCols = gameBoard[0].length;

  let storeNewBoard = new Array(gameBoardRows);

  for (let i = 0; i < gameBoardRows; i++) {
    storeNewBoard[i] = new Array(gamaBoardCols)
  }

  for (let i = 1; i <= gameBoardRows; i++) {
    for (let j = 1; j <= gamaBoardCols; j++) {
      let theAliveNumbers = calAliveNum([i, j], extendedBoard)
      if (extendedBoard[i][j] === 1) {
        storeNewBoard[i - 1][j - 1] = aliveStatus(theAliveNumbers)
      } else {
        storeNewBoard[i - 1][j - 1] = dieStatus(theAliveNumbers)
      }
    }
  }
  return storeNewBoard
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
const calAliveNum = (currentCellCoordinate, gameBoard) => {
  let cenX = currentCellCoordinate[0]
  let cenY = currentCellCoordinate[1]
  let aliveNumber = 0;
  for (let i = cenX - 1; i <= cenX + 1; i++) {
    for (let j = cenY - 1; j <= cenY + 1; j++) {
      if (gameBoard[i][j] === 1) {
        aliveNumber += 1;
      }
    }
  }
  aliveNumber -= gameBoard[cenX][cenY];
  return aliveNumber;
}

export {
  gameOfLife,
  extendTheBoard,
  dieStatus,
  aliveStatus,
  calAliveNum
}
