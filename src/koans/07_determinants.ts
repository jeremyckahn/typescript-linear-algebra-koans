import type { Matrix } from './04_matrices'

/**
 * Calculate the determinant of a 2x2 matrix.
 * Formula: det(A) = ad - bc
 * @param {Matrix} m - The 2x2 matrix.
 * @returns {number} The determinant.
 */
export function determinant2x2(m: Matrix): number {
  throw new Error('Not implemented')
}

/**
 * Calculate the determinant of a 3x3 matrix using the rule of Sarrus or cofactor expansion.
 * Formula (Sarrus):
 * det(A) = aei + bfg + cdh - ceg - bdi - afh
 * @param {Matrix} m - The 3x3 matrix.
 * @returns {number} The determinant.
 */
export function determinant3x3(m: Matrix): number {
  throw new Error('Not implemented')
}

/**
 * Return true if the determinant is non-zero (testing with a 2x2 or 3x3).
 * Hint: Call the appropriate determinant function based on the matrix size.
 * @param {Matrix} m - The matrix.
 * @returns {boolean} True if invertible, false otherwise.
 */
export function isInvertible(m: Matrix): boolean {
  throw new Error('Not implemented')
}
