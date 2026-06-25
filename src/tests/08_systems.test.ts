import { describe, it, expect } from 'vitest';
import { rowSwap, rowScale, rowAdd, gaussianElimination } from '../koans/08_systems';
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

describe('08_systems', () => {
  describe('rowSwap', () => {
    it('should swap two rows', () => {
      const m = [[1, 2], [3, 4]];
      expectMatrixCloseTo(rowSwap(m, 0, 1), [[3, 4], [1, 2]]);
    });
  });

  describe('rowScale', () => {
    it('should scale a row', () => {
      const m = [[1, 2], [3, 4]];
      expectMatrixCloseTo(rowScale(m, 1, 2), [[1, 2], [6, 8]]);
    });
  });

  describe('rowAdd', () => {
    it('should add a scaled row to another', () => {
      const m = [[1, 2], [3, 4]];
      expectMatrixCloseTo(rowAdd(m, 0, 1, -3), [[1, 2], [0, -2]]); // R1 = R1 - 3*R0 -> [3-3*1, 4-3*2] = [0, -2]
    });
  });

  describe('gaussianElimination', () => {
    it('should solve a simple 2x2 system', () => {
      // x + y = 3
      // x - y = 1
      // Expected: x = 2, y = 1
      const a = [[1, 1], [1, -1]];
      const b = [3, 1];
      expectVectorCloseTo(gaussianElimination(a, b), [2, 1]);
    });

    it('should solve a 3x3 system', () => {
      // 2x + y - z = 8
      // -3x - y + 2z = -11
      // -2x + y + 2z = -3
      // Expected: [2, 3, -1]
      const a = [
        [2, 1, -1],
        [-3, -1, 2],
        [-2, 1, 2]
      ];
      const b = [8, -11, -3];
      expectVectorCloseTo(gaussianElimination(a, b), [2, 3, -1]);
    });
  });
});
