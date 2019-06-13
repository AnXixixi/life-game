/**
 * 游戏逻辑测试
 */
import {
  gameOfLife,
  extendTheBoard,
  dieCellStatus,
  aliveCellStatus,
  calAliveCellNum
} from '../../src/logic'

// gameOfLife
describe('测试 gameOfLife 函数', () => {
  it('测试实例1', () => {
    expect(gameOfLife(
      [[1, 0, 0],
      [1, 1, 0],
      [1, 1, 0]])).toEqual([
        [1, 1, 0],
        [0, 0, 0],
        [1, 1, 0]
      ]);
  });

  it('测试实例2', () => {
    expect(gameOfLife(
      [[0, 1, 0],
      [0, 1, 1],
      [0, 0, 0]])).toEqual([
        [0, 1, 1],
        [0, 1, 1],
        [0, 0, 0]
      ]);
  });
});


// 测试 extendTheBoard 函数
describe('测试 extendTheBoard 函数', () => {
  it('2*2的矩阵在初始化后应该是4*4 周围都是0', () => {
    expect(extendTheBoard([
      [1, 1],
      [1, 1]
    ])).toEqual([
      [0, 0, 0, 0],
      [0, 1, 1, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 0]
    ]);
  });
});

//  测试 dieCellStatus 函数
describe('测试 dieCellStatus 函数', () => {
  it('周围没有1，0下一个状态应该是0，无法复活', () => {
    expect(dieCellStatus(0)).toEqual(0);
  });

  it('周围1个1，0下一个状态应该是0，无法复活', () => {
    expect(dieCellStatus(1)).toEqual(0);
  });

  it('周围2个1，0下一个状态应该是0，3个才能复活哦', () => {
    expect(dieCellStatus(2)).toEqual(0);
  });

  it('周围3个1，0下一个状态应该是1，复活了', () => {
    expect(dieCellStatus(3)).toEqual(1);
  });

  it('周围4个1，0下一个状态应该是1，只有3个才能复活', () => {
    expect(dieCellStatus(4)).toEqual(0);
  });
});

//  测试 aliveCellStatus 函数
describe('测试 aliveCellStatus 函数', () => {
  it('周围没有1，1下一个状态应该是0，孤独死', () => {
    expect(aliveCellStatus(0)).toEqual(0);
  });

  it('周围1个1，1下一个状态应该是0，孤独死', () => {
    expect(aliveCellStatus(1)).toEqual(0);
  });

  it('周围2个1，1下一个状态应该是1，继续苟活', () => {
    expect(aliveCellStatus(2)).toEqual(1);
  });

  it('周围3个1，1下一个状态应该是1，继续苟活', () => {
    expect(aliveCellStatus(3)).toEqual(1);
  });

  it('周围4个1，1下一个状态应该是0，挤死了', () => {
    expect(aliveCellStatus(4)).toEqual(0);
  });
});

//测试 calAliveCellNum 函数
describe('测试 calAliveCellNum 函数', () => {
  it('0周围3个1，返回应该3个1', () => {
    expect(calAliveCellNum([1, 1],
      [[0, 0, 0],
      [1, 0, 0],
      [1, 1, 0]])).toEqual(3);
  });

  it('0周围4个1，返回应该4个1', () => {
    expect(calAliveCellNum([1, 1],
      [[1, 0, 0],
      [1, 0, 0],
      [1, 1, 0]])).toEqual(4);
  });
  it('1周围都是0，返回应该都是0', () => {
    expect(calAliveCellNum([1, 1],
      [[0, 0, 0],
      [0, 1, 0],
      [0, 0, 0]])).toEqual(0);
  });

  it('1周围两个1，返回应该2个1', () => {
    expect(calAliveCellNum([1, 1],
      [[0, 1, 0],
      [0, 1, 1],
      [0, 0, 0]])).toEqual(2);
  });

  it('1周围3个1，返回应该3个1', () => {
    expect(calAliveCellNum([1, 1],
      [[0, 1, 0],
      [0, 1, 0],
      [1, 0, 1]])).toEqual(3);
  });

  it('1周围4个1，返回应该4个1', () => {
    expect(calAliveCellNum([1, 1],
      [[1, 0, 0],
      [1, 1, 0],
      [1, 1, 0]])).toEqual(4);
  });
});
