import { describe, it, expect } from 'vitest';
import { crossProduct, parallelogramArea, scalarTripleProduct } from '../koans/03_cross_product';
import type { Vector } from '../koans/01_vectors';

function expectVectorCloseTo(actual: Vector, expected: Vector, numDigits = 4) {
  expect(actual.length).toBe(expected.length);
  for (let i = 0; i < actual.length; i++) {
    const val = actual[i];
    const exp = expected[i];
    if (val === undefined || exp === undefined) {
      throw new Error('Vector element is undefined');
    }
    expect(val).toBeCloseTo(exp, numDigits);
  }
}

describe('03_cross_product', () => {
  describe('crossProduct', () => {
    it('should calculate the cross product of two 3D vectors', () => {
      expectVectorCloseTo(crossProduct([1, 0, 0], [0, 1, 0]), [0, 0, 1]);
    });

    it('should calculate the cross product of two general 3D vectors', () => {
      expectVectorCloseTo(crossProduct([1, 2, 3], [4, 5, 6]), [-3, 6, -3]);
    });

    it('should throw an error for non-3D vectors', () => {
      expect(() => crossProduct([1, 2], [1, 2])).toThrow();
      expect(() => crossProduct([1, 2, 3, 4], [1, 2, 3, 4])).toThrow();
    });
  });

  describe('parallelogramArea', () => {
    it('should calculate the area of the parallelogram spanned by two 3D vectors', () => {
      expect(parallelogramArea([3, 0, 0], [0, 4, 0])).toBeCloseTo(12);
    });
  });

  describe('scalarTripleProduct', () => {
    it('should calculate the volume of the parallelepiped', () => {
      expect(scalarTripleProduct([1, 0, 0], [0, 1, 0], [0, 0, 1])).toBeCloseTo(1);
    });

    it('should calculate the volume of a general parallelepiped', () => {
      // u = [1, -2, 3], v = [0, 3, 1], w = [2, 1, 2]
      // v x w = [3*2 - 1*1, 1*2 - 0*2, 0*1 - 3*2] = [5, 2, -6]
      // u . (v x w) = 1*5 + -2*2 + 3*-6 = 5 - 4 - 18 = -17
      // abs(-17) = 17
      expect(scalarTripleProduct([1, -2, 3], [0, 3, 1], [2, 1, 2])).toBeCloseTo(17);
    });
  });
});
