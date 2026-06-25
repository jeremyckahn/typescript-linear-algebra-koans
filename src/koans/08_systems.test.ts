import { type Matrix } from './04_matrices.test'
import { type Vector } from './01_vectors.test'

/**
 * Helper function to swap two rows in a matrix (in place or returns a new matrix).
 * @param {Matrix} m - The matrix.
 * @param {number} row1 - Index of the first row.
 * @param {number} row2 - Index of the second row.
 * @returns {Matrix} The modified matrix.
 */
export function rowSwap(m: Matrix, row1: number, row2: number): Matrix {
  const copy = m.map((row) => [...row])
  const temp = copy[row1]!

  copy[row1] = copy[row2]!
  copy[row2] = temp
  return copy
}

/**
 * Helper function to multiply a row by a non-zero scalar.
 * @param {Matrix} m - The matrix.
 * @param {number} rowIndex - Index of the row to scale.
 * @param {number} scalar - The scalar.
 * @returns {Matrix} The modified matrix.
 */
export function rowScale(m: Matrix, rowIndex: number, scalar: number): Matrix {
  const copy = m.map((row) => [...row])

  copy[rowIndex] = copy[rowIndex]!.map((val) => val * scalar)
  return copy
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
  const copy = m.map((row) => [...row])

  copy[targetRowIndex] = copy[targetRowIndex]!.map(
    (val, idx) => val + scalar * copy[sourceRowIndex]![idx]!,
  )
  return copy
}

/**
 * Solve the system Ax = b for x using Gaussian elimination.
 * @param {Matrix} a - The coefficient matrix A.
 * @param {Vector} b - The constant vector b.
 * @returns {Vector} The solution vector x.
 */
export function gaussianElimination(a: Matrix, b: Vector): Vector {
  const N = a.length

  if (N === 0) return []
  if (b.length !== N) {
    throw new Error(
      'Dimensions of coefficient matrix A and constant vector b must match.',
    )
  }

  // Create augmented matrix [A | b]
  let aug: Matrix = []

  for (let i = 0; i < N; i++) {
    if (a[i]!.length !== N) {
      throw new Error('Coefficient matrix A must be square.')
    }
    aug.push([...a[i]!, b[i]!])
  }

  for (let i = 0; i < N; i++) {
    // Find pivot
    let maxRow = i

    for (let r = i + 1; r < N; r++) {
      if (Math.abs(aug[r]![i]!) > Math.abs(aug[maxRow]![i]!)) {
        maxRow = r
      }
    }

    if (Math.abs(aug[maxRow]![i]!) < 1e-9) {
      throw new Error('Matrix is singular or nearly singular.')
    }

    // Swap rows using the rowSwap helper
    if (maxRow !== i) {
      aug = rowSwap(aug, i, maxRow)
    }

    // Scale row using the rowScale helper
    const pivotVal = aug[i]![i]!

    aug = rowScale(aug, i, 1 / pivotVal)

    // Eliminate elements above and below using the rowAdd helper
    for (let r = 0; r < N; r++) {
      if (r !== i) {
        const factor = -aug[r]![i]!

        aug = rowAdd(aug, i, r, factor)
      }
    }
  }

  // Extract the last column of the augmented matrix as the solution
  return aug.map((row) => row[N]!)
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
