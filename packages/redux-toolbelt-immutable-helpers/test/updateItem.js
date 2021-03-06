import {updateItem} from '../src'

test('updateItem', () => {
  const arr = Object.freeze(
    [{id: 1, val: 3}, {id: 2, val: 5}, {id: 3, val: 8}]
  )

  const result = updateItem(arr, 1, {val: 10, otherVal: 16})
  const expected = [{id: 1, val: 3}, {id: 2, val: 10, otherVal: 16}, {id: 3, val: 8}]

  expect(result).toEqual(expected)
})
