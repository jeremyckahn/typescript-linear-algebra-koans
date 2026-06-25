import { type Matrix } from './04_matrices.test'
import { type Vector } from './01_vectors.test'
import { matrixVectorMultiply } from './05_matrix_multiplication.test'

/**
 * Generate a 2x2 rotation matrix for a given angle theta in radians.
 * Formula: R = [[cos(theta), -sin(theta)], [sin(theta), cos(theta)]]
 * @param {number} theta - The angle in radians.
 * @returns {Matrix} The rotation matrix.
 */
export function rotationMatrix2D(theta: number): Matrix {
  const cos = Math.cos(theta)
  const sin = Math.sin(theta)

  return [
    [cos, -sin],
    [sin, cos],
  ]
}

/**
 * Generate a 2x2 scaling matrix.
 * Formula: S = [[sx, 0], [0, sy]]
 * @param {number} sx - The scaling factor for the x-axis.
 * @param {number} sy - The scaling factor for the y-axis.
 * @returns {Matrix} The scaling matrix.
 */
export function scalingMatrix2D(sx: number, sy: number): Matrix {
  return [
    [sx, 0],
    [0, sy],
  ]
}

/**
 * A wrapper that uses matrix-vector multiplication to transform a point.
 * @param {Matrix} matrix - The transformation matrix.
 * @param {Vector} vector - The point to transform.
 * @returns {Vector} The transformed point.
 */
export function applyTransformation(matrix: Matrix, vector: Vector): Vector {
  return matrixVectorMultiply(matrix, vector)
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

  const expectMatrixCloseTo = (
    actual: Matrix,
    expected: Matrix,
    numDigits = 4,
  ) => {
    expect(actual.length).toBe(expected.length)
    for (let i = 0; i < actual.length; i++) {
      const actualRow = actual[i]
      const expectedRow = expected[i]

      if (!actualRow || !expectedRow) {
        throw new Error('Matrix row is undefined')
      }
      expect(actualRow.length).toBe(expectedRow.length)
      for (let j = 0; j < actualRow.length; j++) {
        const val = actualRow[j]
        const exp = expectedRow[j]

        if (val === undefined || exp === undefined) {
          throw new Error('Matrix element is undefined')
        }
        expect(val).toBeCloseTo(exp, numDigits)
      }
    }
  }

  describe('06_transformations', () => {
    describe('rotationMatrix2D', () => {
      it('should generate a 2x2 rotation matrix for 90 degrees (PI/2)', () => {
        expectMatrixCloseTo(rotationMatrix2D(Math.PI / 2), [
          [0, -1],
          [1, 0],
        ])
      })

      it('should generate a 2x2 rotation matrix for 180 degrees (PI)', () => {
        expectMatrixCloseTo(rotationMatrix2D(Math.PI), [
          [-1, 0],
          [0, -1],
        ])
      })
    })

    describe('scalingMatrix2D', () => {
      it('should generate a 2x2 scaling matrix', () => {
        expectMatrixCloseTo(scalingMatrix2D(2, 3), [
          [2, 0],
          [0, 3],
        ])
      })
    })

    describe('applyTransformation', () => {
      it('should rotate a point by 90 degrees', () => {
        const point = [1, 0]

        // When implemented correctly, rotation by PI/2 maps (1,0) to (0,1)
        expectVectorCloseTo(
          applyTransformation(rotationMatrix2D(Math.PI / 2), point),
          [0, 1],
        )
      })
    })
  })
}
