import type { Matrix } from './04_matrices';
import type { Vector } from './01_vectors';

/**
 * Helper function to swap two rows in a matrix (in place or returns a new matrix).
 * @param {Matrix} m - The matrix.
 * @param {number} row1 - Index of the first row.
 * @param {number} row2 - Index of the second row.
 * @returns {Matrix} The modified matrix.
 */
export function rowSwap(m: Matrix, row1: number, row2: number): Matrix {
  throw new Error('Not implemented');
}

/**
 * Helper function to multiply a row by a non-zero scalar.
 * @param {Matrix} m - The matrix.
 * @param {number} rowIndex - Index of the row to scale.
 * @param {number} scalar - The scalar.
 * @returns {Matrix} The modified matrix.
 */
export function rowScale(m: Matrix, rowIndex: number, scalar: number): Matrix {
  throw new Error('Not implemented');
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
export function rowAdd(m: Matrix, sourceRowIndex: number, targetRowIndex: number, scalar: number): Matrix {
  throw new Error('Not implemented');
}

/**
 * Solve the system Ax = b for x using Gaussian elimination.
 * @param {Matrix} a - The coefficient matrix A.
 * @param {Vector} b - The constant vector b.
 * @returns {Vector} The solution vector x.
 */
export function gaussianElimination(a: Matrix, b: Vector): Vector {
  throw new Error('Not implemented');
}
