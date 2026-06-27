export type Matrix = number[][]

/**
 * Add two matrices of the same dimensions.
 * Formula: (A + B)_{i,j} = A_{i,j} + B_{i,j}
 * Hint: Iterate through rows and columns, adding corresponding elements.
 * @param {Matrix} m1 - The first matrix.
 * @param {Matrix} m2 - The second matrix.
 * @returns {Matrix} The sum of the two matrices.
 */
export function matrixAdd(m1: Matrix, m2: Matrix): Matrix {
  throw new Error('Not implemented')
}

/**
 * Multiply a matrix by a scalar.
 * Formula: (c * A)_{i,j} = c * A_{i,j}
 * Hint: Iterate through all elements and multiply by the scalar.
 * @param {number} c - The scalar.
 * @param {Matrix} m - The matrix.
 * @returns {Matrix} The scaled matrix.
 */
export function scalarMatrixMultiply(c: number, m: Matrix): Matrix {
  throw new Error('Not implemented')
}

/**
 * Swap the rows and columns of a matrix.
 * Formula: (A^T)_{i,j} = A_{j,i}
 * Hint: The new matrix will have dimensions (cols x rows) of the original.
 * @param {Matrix} m - The matrix to transpose.
 * @returns {Matrix} The transposed matrix.
 */
export function transpose(m: Matrix): Matrix {
  throw new Error('Not implemented')
}

/**
 * Generate an n x n identity matrix (1s on the diagonal, 0s elsewhere).
 * Formula: I_{i,j} = 1 if i == j, 0 otherwise.
 * @param {number} n - The dimension of the identity matrix.
 * @returns {Matrix} The identity matrix.
 */
export function identityMatrix(n: number): Matrix {
  throw new Error('Not implemented')
}

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest

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

  describe('04_matrices', () => {
    describe('matrixAdd', () => {
      it('should add two 2x2 matrices', () => {
        const m1 = [
          [1, 2],
          [3, 4],
        ]
        const m2 = [
          [5, 6],
          [7, 8],
        ]

        expectMatrixCloseTo(matrixAdd(m1, m2), [
          [6, 8],
          [10, 12],
        ])
      })

      it('should throw an error for mismatched dimensions', () => {
        const m1 = [
          [1, 2],
          [3, 4],
        ]
        const m2 = [
          [1, 2, 3],
          [4, 5, 6],
        ]

        expect(() => matrixAdd(m1, m2)).toThrow()
      })
    })

    describe('scalarMatrixMultiply', () => {
      it('should multiply a 2x2 matrix by a scalar', () => {
        const m = [
          [1, 2],
          [3, 4],
        ]

        expectMatrixCloseTo(scalarMatrixMultiply(2, m), [
          [2, 4],
          [6, 8],
        ])
      })
    })

    describe('transpose', () => {
      it('should transpose a 2x2 matrix', () => {
        const m = [
          [1, 2],
          [3, 4],
        ]

        expectMatrixCloseTo(transpose(m), [
          [1, 3],
          [2, 4],
        ])
      })

      it('should transpose a 2x3 matrix into a 3x2 matrix', () => {
        const m = [
          [1, 2, 3],
          [4, 5, 6],
        ]

        expectMatrixCloseTo(transpose(m), [
          [1, 4],
          [2, 5],
          [3, 6],
        ])
      })
    })

    describe('identityMatrix', () => {
      it('should generate a 2x2 identity matrix', () => {
        expectMatrixCloseTo(identityMatrix(2), [
          [1, 0],
          [0, 1],
        ])
      })

      it('should generate a 3x3 identity matrix', () => {
        expectMatrixCloseTo(identityMatrix(3), [
          [1, 0, 0],
          [0, 1, 0],
          [0, 0, 1],
        ])
      })
    })
  })
}
