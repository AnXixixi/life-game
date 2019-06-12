/**
 * 游戏逻辑测试
 */
import {
  dieStatus,
  aliveStatus,
  calAliveNum
} from '../../src/logic'

//  测试 dieStatus 函数
describe('测试 dieStatus 函数', () => {
  it('周围没有1，0下一个状态应该是0，无法复活', () => {
    expect(dieStatus(0)).toEqual(0);
  });

  it('周围1个1，0下一个状态应该是0，无法复活', () => {
    expect(dieStatus(1)).toEqual(0);
  });

  it('周围2个1，0下一个状态应该是0，3个才能复活哦', () => {
    expect(dieStatus(2)).toEqual(0);
  });

  it('周围3个1，0下一个状态应该是1，复活了', () => {
    expect(dieStatus(3)).toEqual(1);
  });

  it('周围4个1，0下一个状态应该是1，只有3个才能复活', () => {
    expect(dieStatus(4)).toEqual(0);
  });
});

//  测试 aliveStatus 函数
describe('测试 aliveStatus 函数', () => {
  it('周围没有1，1下一个状态应该是0，孤独死', () => {
    expect(aliveStatus(0)).toEqual(0);
  });

  it('周围1个1，1下一个状态应该是0，孤独死', () => {
    expect(aliveStatus(1)).toEqual(0);
  });

  it('周围2个1，1下一个状态应该是1，继续苟活', () => {
    expect(aliveStatus(2)).toEqual(1);
  });

  it('周围3个1，1下一个状态应该是1，继续苟活', () => {
    expect(aliveStatus(3)).toEqual(1);
  });

  it('周围4个1，1下一个状态应该是0，挤死了', () => {
    expect(aliveStatus(4)).toEqual(0);
  });
});

//测试 calAliveNum 函数
describe('测试 calAliveNum 函数', () => {
  it('0周围3个1，返回应该3个1', () => {
    expect(calAliveNum([1, 1],
      [[0, 0, 0],
      [1, 0, 0],
      [1, 1, 0]])).toEqual(3);
  });

  it('0周围4个1，返回应该4个1', () => {
    expect(calAliveNum([1, 1],
      [[1, 0, 0],
      [1, 0, 0],
      [1, 1, 0]])).toEqual(4);
  });
  it('1周围都是0，返回应该都是0', () => {
    expect(calAliveNum([1, 1],
      [[0, 0, 0],
      [0, 1, 0],
      [0, 0, 0]])).toEqual(0);
  });

  it('1周围两个1，返回应该2个1', () => {
    expect(calAliveNum([1, 1],
      [[0, 1, 0],
      [0, 1, 1],
      [0, 0, 0]])).toEqual(2);
  });

  it('1周围3个1，返回应该3个1', () => {
    expect(calAliveNum([1, 1],
      [[0, 1, 0],
      [0, 1, 0],
      [1, 0, 1]])).toEqual(3);
  });

  it('1周围4个1，返回应该4个1', () => {
    expect(calAliveNum([1, 1],
      [[1, 0, 0],
      [1, 1, 0],
      [1, 1, 0]])).toEqual(4);
  });
});


/* describe('test', () => {
  it('renders props.msg when passed', () => {
    expect(gameOfLife([
      [0, 1, 0],
      [0, 0, 1],
      [1, 1, 1],
      [0, 0, 0]
    ])).toEqual([
      [0, 0, 0],
      [1, 0, 1],
      [0, 1, 1],
      [0, 1, 0]
    ])

    expect(gameOfLife([
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0]
    ])).toEqual([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ])

    expect(gameOfLife([
      [1, 1, 1],
      [0, 1, 0],
      [0, 0, 0]
    ])).toEqual([
      [1, 1, 1],
      [1, 1, 1],
      [0, 0, 0]
    ])
  }) */
/* }) */

