import { type Vector, magnitude, scalarMultiply, vectorAdd } from './01_vectors';

/**
 * Calculate the sum of the products of corresponding components.
 * Formula: v1 . v2 = v1_1 * v2_1 + v1_2 * v2_2 + ... + v1_n * v2_n
 * Hint: Iterate through the vectors and sum the product of their components at each index.
 * @param {Vector} v1 - The first vector.
 * @param {Vector} v2 - The second vector.
 * @returns {number} The dot product.
 */
export function dotProduct(v1: Vector, v2: Vector): number {
  throw new Error('Not implemented');
}

/**
 * Find the angle in radians between two vectors.
 * Formula: v . w = ||v|| * ||w|| * cos(theta) => theta = acos((v . w) / (||v|| * ||w||))
 * Hint: Use the dot product and magnitude functions you built, and Math.acos.
 * @param {Vector} v1 - The first vector.
 * @param {Vector} v2 - The second vector.
 * @returns {number} The angle in radians.
 */
export function angleBetween(v1: Vector, v2: Vector): number {
  throw new Error('Not implemented');
}

/**
 * Calculate the vector projection of vector v onto vector w.
 * Formula: proj_w(v) = ((v . w) / (w . w)) * w
 * Hint: This results in a vector.
 * @param {Vector} v - The vector to project.
 * @param {Vector} w - The vector to project onto.
 * @returns {Vector} The projected vector.
 */
export function project(v: Vector, w: Vector): Vector {
  throw new Error('Not implemented');
}
