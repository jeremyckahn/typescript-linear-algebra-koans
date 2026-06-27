import { type Vector, magnitude, scalarMultiply, vectorAdd } from './01_vectors'

/**
 * Calculate the sum of the products of corresponding components.
 * Formula: v1 . v2 = v1_1 * v2_1 + v1_2 * v2_2 + ... + v1_n * v2_n
 * Hint: Iterate through the vectors and sum the product of their components at each index.
 * @param {Vector} v1 - The first vector.
 * @param {Vector} v2 - The second vector.
 * @returns {number} The dot product.
 */
export function dotProduct(v1: Vector, v2: Vector): number {
  throw new Error('Not implemented')
}

/**
 * Find the angle in radians between two vectors.
 * Formula: v . w = ||v|| * ||w|| * cos(theta) => theta = acos((v . w) / (||v|| * ||w||))
 * Hint: Use the dot product and magnitude functions you built, and Math.acos.
 * @param {Vector} v1 - The first vector.
 * @param {Vector} v2 - The second vector.
 * @returns {number} The angle in radians.
 */
export function angleBetween(v1: Vector, v2: Vector): number {
  throw new Error('Not implemented')
}

/**
 * Calculate the vector projection of vector v onto vector w.
 * Formula: proj_w(v) = ((v . w) / (w . w)) * w
 * Hint: This results in a vector.
 * @param {Vector} v - The vector to project.
 * @param {Vector} w - The vector to project onto.
 * @returns {Vector} The projected vector.
 */
export function project(v: Vector, w: Vector): Vector {
  throw new Error('Not implemented')
}

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest

  const expectVectorCloseTo = (
    actual: Vector,
    expected: Vector,
    numDigits = 4,
  ) => {
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
}
