import { describe, it, expect } from 'vitest';
import { matrixAdd, scalarMatrixMultiply, transpose, identityMatrix, Matrix } from '../koans/04_matrices';

function expectMatrixCloseTo(actual: Matrix, expected: Matrix, numDigits = 4) {
  expect(actual.length).toBe(expected.length);
  for (let i = 0; i < actual.length; i++) {
    expect(actual[i].length).toBe(expected[i].length);
    for (let j = 0; j < actual[i].length; j++) {
      expect(actual[i][j]).toBeCloseTo(expected[i][j], numDigits);
    }
  }
}

describe('04_matrices', () => {
  describe('matrixAdd', () => {
    it('should add two 2x2 matrices', () => {
      const m1 = [[1, 2], [3, 4]];
      const m2 = [[5, 6], [7, 8]];
      expectMatrixCloseTo(matrixAdd(m1, m2), [[6, 8], [10, 12]]);
    });

    it('should throw an error for mismatched dimensions', () => {
      const m1 = [[1, 2], [3, 4]];
      const m2 = [[1, 2, 3], [4, 5, 6]];
      expect(() => matrixAdd(m1, m2)).toThrow();
    });
  });

  describe('scalarMatrixMultiply', () => {
    it('should multiply a 2x2 matrix by a scalar', () => {
      const m = [[1, 2], [3, 4]];
      expectMatrixCloseTo(scalarMatrixMultiply(2, m), [[2, 4], [6, 8]]);
    });
  });

  describe('transpose', () => {
    it('should transpose a 2x2 matrix', () => {
      const m = [[1, 2], [3, 4]];
      expectMatrixCloseTo(transpose(m), [[1, 3], [2, 4]]);
    });

    it('should transpose a 2x3 matrix into a 3x2 matrix', () => {
      const m = [[1, 2, 3], [4, 5, 6]];
      expectMatrixCloseTo(transpose(m), [[1, 4], [2, 5], [3, 6]]);
    });
  });

  describe('identityMatrix', () => {
    it('should generate a 2x2 identity matrix', () => {
      expectMatrixCloseTo(identityMatrix(2), [[1, 0], [0, 1]]);
    });

    it('should generate a 3x3 identity matrix', () => {
      expectMatrixCloseTo(identityMatrix(3), [[1, 0, 0], [0, 1, 0], [0, 0, 1]]);
    });
  });
});
