import { describe, it, expect } from 'vitest'
import { dotProduct, angleBetween, project } from '../koans/02_dot_product'
import type { Vector } from '../koans/01_vectors'

function expectVectorCloseTo(actual: Vector, expected: Vector, numDigits = 4) {
  expect(actual.length).toBe(expected.length)
  for (let i = 0; i < actual.length; i++) {
    const val = actual[i]
    const exp = expected[i]

    if (val === undefined || exp === undefined) {
      throw new Error('Vector element is undefined')
    }
    expect(val).toBeCloseTo(exp, numDigits)
  }
}

describe('02_dot_product', () => {
  describe('dotProduct', () => {
    it('should calculate the dot product of two 2D vectors', () => {
      expect(dotProduct([1, 2], [3, 4])).toBeCloseTo(11) // 1*3 + 2*4 = 3 + 8
    })

    it('should calculate the dot product of two 3D vectors', () => {
      expect(dotProduct([1, 2, 3], [4, -5, 6])).toBeCloseTo(12) // 1*4 + 2*-5 + 3*6 = 4 - 10 + 18
    })

    it('should throw an error for mismatched dimensions', () => {
      expect(() => dotProduct([1, 2], [1, 2, 3])).toThrow()
    })

    it('should return 0 for orthogonal vectors', () => {
      expect(dotProduct([1, 0], [0, 1])).toBeCloseTo(0)
    })
  })

  describe('angleBetween', () => {
    it('should return 0 for same vectors', () => {
      expect(angleBetween([1, 0], [1, 0])).toBeCloseTo(0)
    })

    it('should return PI/2 for orthogonal vectors', () => {
      expect(angleBetween([1, 0], [0, 1])).toBeCloseTo(Math.PI / 2)
    })

    it('should return PI for opposite vectors', () => {
      expect(angleBetween([1, 0], [-1, 0])).toBeCloseTo(Math.PI)
    })
  })

  describe('project', () => {
    it('should project a vector onto another', () => {
      expectVectorCloseTo(project([2, 3], [1, 0]), [2, 0])
    })

    it('should project a vector onto another 2', () => {
      expectVectorCloseTo(project([2, 1], [-1, 2]), [0, 0]) // orthogonal
    })
  })
})
