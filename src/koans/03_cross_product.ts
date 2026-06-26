import { type Vector, magnitude } from './01_vectors';
import { dotProduct } from './02_dot_product';

/**
 * Calculate the cross product of two 3D vectors resulting in a new orthogonal 3D vector.
 * Throw an error if vectors are not exactly 3D.
 * Formula: v x w = [
 *   v_2 * w_3 - v_3 * w_2,
 *   v_3 * w_1 - v_1 * w_3,
 *   v_1 * w_2 - v_2 * w_1
 * ]
 * Hint: Check the length of the vectors first, then use the formula.
 * @param {Vector} v1 - The first 3D vector.
 * @param {Vector} v2 - The second 3D vector.
 * @returns {Vector} The cross product.
 */
export function crossProduct(v1: Vector, v2: Vector): Vector {
  throw new Error('Not implemented');
}

/**
 * Calculate the area of the parallelogram spanned by two 3D vectors.
 * Formula: Area = ||v x w||
 * Hint: Use the crossProduct and magnitude functions.
 * @param {Vector} v1 - The first 3D vector.
 * @param {Vector} v2 - The second 3D vector.
 * @returns {number} The area of the parallelogram.
 */
export function parallelogramArea(v1: Vector, v2: Vector): number {
  throw new Error('Not implemented');
}

/**
 * Calculate the volume of the parallelepiped formed by three 3D vectors.
 * Formula: Volume = |u . (v x w)|
 * Hint: Use crossProduct, dotProduct, and Math.abs.
 * @param {Vector} v1 - The first 3D vector.
 * @param {Vector} v2 - The second 3D vector.
 * @param {Vector} v3 - The third 3D vector.
 * @returns {number} The volume.
 */
export function scalarTripleProduct(v1: Vector, v2: Vector, v3: Vector): number {
  throw new Error('Not implemented');
}
