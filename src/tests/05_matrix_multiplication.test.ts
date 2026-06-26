import { describe, it, expect } from 'vitest';
import { matrixVectorMultiply, matrixMultiply } from '../koans/05_matrix_multiplication';
import type { Matrix } from '../koans/04_matrices';
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

function expectMatrixCloseTo(actual: Matrix, expected: Matrix, numDigits = 4) {
  expect(actual.length).toBe(expected.length);
  for (let i = 0; i < actual.length; i++) {
    const actualRow = actual[i];
    const expectedRow = expected[i];
    if (!actualRow || !expectedRow) {
      throw new Error('Matrix row is undefined');
    }
    expect(actualRow.length).toBe(expectedRow.length);
    for (let j = 0; j < actualRow.length; j++) {
      const val = actualRow[j];
      const exp = expectedRow[j];
      if (val === undefined || exp === undefined) {
        throw new Error('Matrix element is undefined');
      }
      expect(val).toBeCloseTo(exp, numDigits);
    }
  }
}

describe('05_matrix_multiplication', () => {
  describe('matrixVectorMultiply', () => {
    it('should multiply a 2x2 matrix by a 2D vector', () => {
      const m = [[1, 2], [3, 4]];
      const v = [5, 6];
      expectVectorCloseTo(matrixVectorMultiply(m, v), [17, 39]); // [1*5+2*6, 3*5+4*6] = [5+12, 15+24] = [17, 39]
    });

    it('should throw an error for mismatched dimensions', () => {
      const m = [[1, 2], [3, 4]];
      const v = [1, 2, 3];
      expect(() => matrixVectorMultiply(m, v)).toThrow();
    });
  });

  describe('matrixMultiply', () => {
    it('should multiply two 2x2 matrices', () => {
      const m1 = [[1, 2], [3, 4]];
      const m2 = [[5, 6], [7, 8]];
      // [1*5+2*7, 1*6+2*8] = [19, 22]
      // [3*5+4*7, 3*6+4*8] = [43, 50]
      expectMatrixCloseTo(matrixMultiply(m1, m2), [[19, 22], [43, 50]]);
    });

    it('should multiply a 2x3 matrix by a 3x2 matrix', () => {
      const m1 = [[1, 2, 3], [4, 5, 6]];
      const m2 = [[7, 8], [9, 10], [11, 12]];
      // [1*7+2*9+3*11, 1*8+2*10+3*12] = [7+18+33, 8+20+36] = [58, 64]
      // [4*7+5*9+6*11, 4*8+5*10+6*12] = [28+45+66, 32+50+72] = [139, 154]
      expectMatrixCloseTo(matrixMultiply(m1, m2), [[58, 64], [139, 154]]);
    });

    it('should throw an error for mismatched dimensions', () => {
      const m1 = [[1, 2], [3, 4]];
      const m2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
      expect(() => matrixMultiply(m1, m2)).toThrow();
    });
  });
});
