import type { Matrix } from './04_matrices'
import type { Vector } from './01_vectors'

/**
 * Helper function to swap two rows in a matrix (in place or returns a new matrix).
 * @param {Matrix} m - The matrix.
 * @param {number} row1 - Index of the first row.
 * @param {number} row2 - Index of the second row.
 * @returns {Matrix} The modified matrix.
 */
export function rowSwap(m: Matrix, row1: number, row2: number): Matrix {
  throw new Error('Not implemented')
}

/**
 * Helper function to multiply a row by a non-zero scalar.
 * @param {Matrix} m - The matrix.
 * @param {number} rowIndex - Index of the row to scale.
 * @param {number} scalar - The scalar.
 * @returns {Matrix} The modified matrix.
 */
export function rowScale(m: Matrix, rowIndex: number, scalar: number): Matrix {
  throw new Error('Not implemented')
}

/**
 * Helper to add a scalar multiple of one row to another.
 * Formula: R_target = R_target + scalar * R_source
 * @param {Matrix} m - The matrix.
 * @param {number} sourceRowIndex - Index of the source row.
 * @param {number} targetRowIndex - Index of the target row.
 * @param {number} scalar - The scalar to multiply the source row by.
 * @returns {Matrix} The modified matrix.
 */
export function rowAdd(
  m: Matrix,
  sourceRowIndex: number,
  targetRowIndex: number,
  scalar: number,
): Matrix {
  throw new Error('Not implemented')
}

/**
 * Solve the system Ax = b for x using Gaussian elimination.
 * @param {Matrix} a - The coefficient matrix A.
 * @param {Vector} b - The constant vector b.
 * @returns {Vector} The solution vector x.
 */
export function gaussianElimination(a: Matrix, b: Vector): Vector {
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

  describe('08_systems', () => {
    describe('rowSwap', () => {
      it('should swap two rows', () => {
        const m = [
          [1, 2],
          [3, 4],
        ]

        expectMatrixCloseTo(rowSwap(m, 0, 1), [
          [3, 4],
          [1, 2],
        ])
      })
    })

    describe('rowScale', () => {
      it('should scale a row', () => {
        const m = [
          [1, 2],
          [3, 4],
        ]

        expectMatrixCloseTo(rowScale(m, 1, 2), [
          [1, 2],
          [6, 8],
        ])
      })
    })

    describe('rowAdd', () => {
      it('should add a scaled row to another', () => {
        const m = [
          [1, 2],
          [3, 4],
        ]

        expectMatrixCloseTo(rowAdd(m, 0, 1, -3), [
          [1, 2],
          [0, -2],
        ]) // R1 = R1 - 3*R0 -> [3-3*1, 4-3*2] = [0, -2]
      })
    })

    describe('gaussianElimination', () => {
      it('should solve a simple 2x2 system', () => {
        // x + y = 3
        // x - y = 1
        // Expected: x = 2, y = 1
        const a = [
          [1, 1],
          [1, -1],
        ]
        const b = [3, 1]

        expectVectorCloseTo(gaussianElimination(a, b), [2, 1])
      })

      it('should solve a 3x3 system', () => {
        // 2x + y - z = 8
        // -3x - y + 2z = -11
        // -2x + y + 2z = -3
        // Expected: [2, 3, -1]
        const a = [
          [2, 1, -1],
          [-3, -1, 2],
          [-2, 1, 2],
        ]
        const b = [8, -11, -3]

        expectVectorCloseTo(gaussianElimination(a, b), [2, 3, -1])
      })
    })
  })
}
