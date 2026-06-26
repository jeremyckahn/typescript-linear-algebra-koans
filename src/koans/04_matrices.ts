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
