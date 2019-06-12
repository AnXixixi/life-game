const gameOfLife = (board) => {
  if (board.length <= 0) {
    return;
  }
  //遍历判断死活
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      liveOrDie(board, i, j)
    }
  }
  //对新复活或者新死亡的细胞，恢复其 1/0 值
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === -1) {
        board[i][j] = 1
      } else if (board[i][j] === 2) {
        board[i][j] = 0
      }
    }
  }
  return board
}
//判断该细胞的死活
const liveOrDie = (board, cenX, cenY) => {
  // 周围活细胞的个数
  let alive = 0
  //周围死细胞的个数
  let dead = 0
  //遍历 3*3 的正方形细胞
  for (let i = cenX - 1; i <= cenX + 1; i++) {
    for (let j = cenY - 1; j <= cenY + 1; j++) {
      //排除 越界以及本身
      if ((i === cenX && j === cenY) || (i < 0 || i >= board.length) || (j < 0 || j >= board[0].length)) {
        continue;
      }
      //后面用 -1 表示这一轮新复活的，为了不影响其他细胞的判断
      if (board[i][j] <= 0) {
        dead++;
      } else {
        //同理用 2表示 这一轮新死亡的
        alive++;
      }
    }
  }
  //死细胞是否复活
  if (board[cenX][cenY] === 0) {
    if (alive === 3) {
      board[cenX][cenY] = -1; // -1新复活的
    }
  } else {
    //活细胞是否死亡
    if (alive < 2 || alive > 3) {
      board[cenX][cenY] = 2; // 2 新死亡的
    }
  }
}


export {gameOfLife}
