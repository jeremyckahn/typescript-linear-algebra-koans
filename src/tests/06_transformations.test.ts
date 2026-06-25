import { describe, it, expect } from 'vitest';
import { rotationMatrix2D, scalingMatrix2D, applyTransformation } from '../koans/06_transformations';
import { Matrix } from '../koans/04_matrices';
import { Vector } from '../koans/01_vectors';

function expectVectorCloseTo(actual: Vector, expected: Vector, numDigits = 4) {
  expect(actual.length).toBe(expected.length);
  for (let i = 0; i < actual.length; i++) {
    expect(actual[i]).toBeCloseTo(expected[i], numDigits);
  }
}

function expectMatrixCloseTo(actual: Matrix, expected: Matrix, numDigits = 4) {
  expect(actual.length).toBe(expected.length);
  for (let i = 0; i < actual.length; i++) {
    expect(actual[i].length).toBe(expected[i].length);
    for (let j = 0; j < actual[i].length; j++) {
      expect(actual[i][j]).toBeCloseTo(expected[i][j], numDigits);
    }
  }
}

describe('06_transformations', () => {
  describe('rotationMatrix2D', () => {
    it('should generate a 2x2 rotation matrix for 90 degrees (PI/2)', () => {
      expectMatrixCloseTo(rotationMatrix2D(Math.PI / 2), [[0, -1], [1, 0]]);
    });

    it('should generate a 2x2 rotation matrix for 180 degrees (PI)', () => {
      expectMatrixCloseTo(rotationMatrix2D(Math.PI), [[-1, 0], [0, -1]]);
    });
  });

  describe('scalingMatrix2D', () => {
    it('should generate a 2x2 scaling matrix', () => {
      expectMatrixCloseTo(scalingMatrix2D(2, 3), [[2, 0], [0, 3]]);
    });
  });

  describe('applyTransformation', () => {
    it('should rotate a point by 90 degrees', () => {
      const point = [1, 0];
      // When implemented correctly, rotation by PI/2 maps (1,0) to (0,1)
      expectVectorCloseTo(applyTransformation(rotationMatrix2D(Math.PI / 2), point), [0, 1]);
    });
  });
});
