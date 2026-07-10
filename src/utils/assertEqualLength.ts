import type { Vector } from '../koans/01_vectors.test'

export const assertEqualLength = (v1: Vector, v2: Vector) => {
  if (v1.length !== v2.length) {
    throw new Error('mismatched vector sizes')
  }
}
