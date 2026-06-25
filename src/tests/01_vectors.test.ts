import { describe, it, expect } from 'vitest';
import { vectorAdd, vectorSubtract, scalarMultiply, magnitude, normalize, Vector } from '../koans/01_vectors';

function expectVectorCloseTo(actual: Vector, expected: Vector, numDigits = 4) {
  expect(actual.length).toBe(expected.length);
  for (let i = 0; i < actual.length; i++) {
    expect(actual[i]).toBeCloseTo(expected[i], numDigits);
  }
}

describe('01_vectors', () => {
  describe('vectorAdd', () => {
    it('should add two 2D vectors', () => {
      expectVectorCloseTo(vectorAdd([1, 2], [3, 4]), [4, 6]);
    });

    it('should add two 3D vectors', () => {
      expectVectorCloseTo(vectorAdd([1, 2, 3], [4, 5, 6]), [5, 7, 9]);
    });

    it('should throw an error for mismatched dimensions', () => {
      expect(() => vectorAdd([1, 2], [1, 2, 3])).toThrow();
    });
  });

  describe('vectorSubtract', () => {
    it('should subtract two 2D vectors', () => {
      expectVectorCloseTo(vectorSubtract([3, 4], [1, 2]), [2, 2]);
    });

    it('should throw an error for mismatched dimensions', () => {
      expect(() => vectorSubtract([1, 2], [1, 2, 3])).toThrow();
    });
  });

  describe('scalarMultiply', () => {
    it('should multiply a vector by a scalar', () => {
      expectVectorCloseTo(scalarMultiply(2, [1, 2, 3]), [2, 4, 6]);
    });
    
    it('should handle multiplying by 0', () => {
      expectVectorCloseTo(scalarMultiply(0, [1, 2, 3]), [0, 0, 0]);
    });
  });

  describe('magnitude', () => {
    it('should calculate the magnitude of a 2D vector', () => {
      expect(magnitude([3, 4])).toBeCloseTo(5);
    });

    it('should calculate the magnitude of a 3D vector', () => {
      expect(magnitude([1, 2, 2])).toBeCloseTo(3);
    });

    it('should calculate the magnitude of a zero vector', () => {
      expect(magnitude([0, 0, 0])).toBeCloseTo(0);
    });
  });

  describe('normalize', () => {
    it('should normalize a 2D vector', () => {
      expectVectorCloseTo(normalize([3, 4]), [0.6, 0.8]);
    });

    it('should normalize a 3D vector', () => {
      expectVectorCloseTo(normalize([1, 2, 2]), [1/3, 2/3, 2/3]);
    });

    it('should throw an error when normalizing a zero vector', () => {
      expect(() => normalize([0, 0])).toThrow();
    });
  });
});
