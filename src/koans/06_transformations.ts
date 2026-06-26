import type { Matrix } from './04_matrices'
import type { Vector } from './01_vectors'
import { matrixVectorMultiply } from './05_matrix_multiplication'

/**
 * Generate a 2x2 rotation matrix for a given angle theta in radians.
 * Formula: R = [[cos(theta), -sin(theta)], [sin(theta), cos(theta)]]
 * @param {number} theta - The angle in radians.
 * @returns {Matrix} The rotation matrix.
 */
export function rotationMatrix2D(theta: number): Matrix {
  throw new Error('Not implemented')
}

/**
 * Generate a 2x2 scaling matrix.
 * Formula: S = [[sx, 0], [0, sy]]
 * @param {number} sx - The scaling factor for the x-axis.
 * @param {number} sy - The scaling factor for the y-axis.
 * @returns {Matrix} The scaling matrix.
 */
export function scalingMatrix2D(sx: number, sy: number): Matrix {
  throw new Error('Not implemented')
}

/**
 * A wrapper that uses matrix-vector multiplication to transform a point.
 * @param {Matrix} matrix - The transformation matrix.
 * @param {Vector} vector - The point to transform.
 * @returns {Vector} The transformed point.
 */
export function applyTransformation(matrix: Matrix, vector: Vector): Vector {
  throw new Error('Not implemented')
}
