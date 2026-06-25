import { describe, it, expect } from 'vitest';
import { determinant2x2, determinant3x3, isInvertible } from '../koans/07_determinants';

describe('07_determinants', () => {
  describe('determinant2x2', () => {
    it('should calculate the determinant of a 2x2 matrix', () => {
      const m = [[1, 2], [3, 4]];
      expect(determinant2x2(m)).toBeCloseTo(-2); // 1*4 - 2*3 = 4 - 6 = -2
    });
  });

  describe('determinant3x3', () => {
    it('should calculate the determinant of a 3x3 matrix', () => {
      const m = [[1, 2, 3], [0, 1, 4], [5, 6, 0]];
      // det = 1*(1*0 - 4*6) - 2*(0*0 - 4*5) + 3*(0*6 - 1*5)
      // det = 1*(-24) - 2*(-20) + 3*(-5) = -24 + 40 - 15 = 1
      expect(determinant3x3(m)).toBeCloseTo(1);
    });
  });

  describe('isInvertible', () => {
    it('should return true for an invertible 2x2 matrix', () => {
      const m = [[1, 2], [3, 4]]; // det = -2
      expect(isInvertible(m)).toBe(true);
    });

    it('should return false for a singular 2x2 matrix', () => {
      const m = [[1, 2], [2, 4]]; // det = 1*4 - 2*2 = 0
      expect(isInvertible(m)).toBe(false);
    });
    
    it('should return true for an invertible 3x3 matrix', () => {
      const m = [[1, 2, 3], [0, 1, 4], [5, 6, 0]]; // det = 1
      expect(isInvertible(m)).toBe(true);
    });
  });
});
