import { type Vector, magnitude } from './01_vectors.test'
import { dotProduct } from './02_dot_product.test'

/**
 * Calculate the cross product of two 3D vectors resulting in a new orthogonal 3D vector.
 * Throw an error if vectors are not exactly 3D.
 * Formula: v x w = [
 *   v_2 * w_3 - v_3 * w_2,
 *   v_3 * w_1 - v_1 * w_3,
 *   v_1 * w_2 - v_2 * w_1
 * ]
 * Hint: Check the length of the vectors first, then use the formula.
 * @param {Vector} v1 - The first 3D vector.
 * @param {Vector} v2 - The second 3D vector.
 * @returns {Vector} The cross product.
 */
export function crossProduct(v1: Vector, v2: Vector): Vector {
  throw new Error('Not implemented')
}

/**
 * Calculate the area of the parallelogram spanned by two 3D vectors.
 * Formula: Area = ||v x w||
 * Hint: Use the crossProduct and magnitude functions.
 * @param {Vector} v1 - The first 3D vector.
 * @param {Vector} v2 - The second 3D vector.
 * @returns {number} The area of the parallelogram.
 */
export function parallelogramArea(v1: Vector, v2: Vector): number {
  throw new Error('Not implemented')
}

/**
 * Calculate the volume of the parallelepiped formed by three 3D vectors.
 * Formula: Volume = |u . (v x w)|
 * Hint: Use crossProduct, dotProduct, and Math.abs.
 * @param {Vector} v1 - The first 3D vector.
 * @param {Vector} v2 - The second 3D vector.
 * @param {Vector} v3 - The third 3D vector.
 * @returns {number} The volume.
 */
export function scalarTripleProduct(
  v1: Vector,
  v2: Vector,
  v3: Vector,
): number {
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

  describe('03_cross_product', () => {
    describe('crossProduct', () => {
      it('should calculate the cross product of two 3D vectors', () => {
        expectVectorCloseTo(crossProduct([1, 0, 0], [0, 1, 0]), [0, 0, 1])
      })

      it('should calculate the cross product of two general 3D vectors', () => {
        expectVectorCloseTo(crossProduct([1, 2, 3], [4, 5, 6]), [-3, 6, -3])
      })

      it('should throw an error for non-3D vectors', () => {
        expect(() => crossProduct([1, 2], [1, 2])).toThrow()
        expect(() => crossProduct([1, 2, 3, 4], [1, 2, 3, 4])).toThrow()
      })
    })

    describe('parallelogramArea', () => {
      it('should calculate the area of the parallelogram spanned by two 3D vectors', () => {
        expect(parallelogramArea([3, 0, 0], [0, 4, 0])).toBeCloseTo(12)
      })
    })

    describe('scalarTripleProduct', () => {
      it('should calculate the volume of the parallelepiped', () => {
        expect(
          scalarTripleProduct([1, 0, 0], [0, 1, 0], [0, 0, 1]),
        ).toBeCloseTo(1)
      })

      it('should calculate the volume of a general parallelepiped', () => {
        // u = [1, -2, 3], v = [0, 3, 1], w = [2, 1, 2]
        // v x w = [3*2 - 1*1, 1*2 - 0*2, 0*1 - 3*2] = [5, 2, -6]
        // u . (v x w) = 1*5 + -2*2 + 3*-6 = 5 - 4 - 18 = -17
        // abs(-17) = 17
        expect(
          scalarTripleProduct([1, -2, 3], [0, 3, 1], [2, 1, 2]),
        ).toBeCloseTo(17)
      })
    })
  })
}
