import type { Matrix } from './04_matrices'
import type { Vector } from './01_vectors'
import { dotProduct } from './02_dot_product'

/**
 * Multiply an m x n matrix by an n-dimensional vector.
 * Formula: (A * x)_i = A_{i,1}*x_1 + A_{i,2}*x_2 + ... + A_{i,n}*x_n
 * Hint: The result is an m-dimensional vector. Each component is the dot product of a row of the matrix and the vector.
 * @param {Matrix} m - The m x n matrix.
 * @param {Vector} v - The n-dimensional vector.
 * @returns {Vector} The resulting m-dimensional vector.
 */
export function matrixVectorMultiply(m: Matrix, v: Vector): Vector {
  throw new Error('Not implemented')
}

/**
 * Multiply an m x n matrix by an n x p matrix to yield an m x p matrix.
 * Formula: (A * B)_{i,j} = A_{i,1}*B_{1,j} + A_{i,2}*B_{2,j} + ... + A_{i,n}*B_{n,j}
 * Hint: This is the dot product of rows from m1 and columns from m2.
 * @param {Matrix} m1 - The m x n matrix.
 * @param {Matrix} m2 - The n x p matrix.
 * @returns {Matrix} The resulting m x p matrix.
 */
export function matrixMultiply(m1: Matrix, m2: Matrix): Matrix {
  throw new Error('Not implemented')
}
