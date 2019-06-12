import {gameOfLife} from '../../src/components/luoji'


// 1. 周围3个1，则1->1 0->1
// 2. 周围2个1，则1->1 0->0
// 3. 周围0个1，1个1，则1->0 0->0
describe('test', () => {
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
  })
})

