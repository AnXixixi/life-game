/**
 * 游戏逻辑测试
 */
import {
  calAliveNum
} from '../../src/logic'


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

