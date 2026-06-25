import { type Matrix } from './04_matrices.test'

/**
 * Calculate the determinant of a 2x2 matrix.
 * Formula: det(A) = ad - bc
 * @param {Matrix} m - The 2x2 matrix.
 * @returns {number} The determinant.
 */
export function determinant2x2(m: Matrix): number {
  if (m.length !== 2 || m[0]!.length !== 2 || m[1]!.length !== 2) {
    throw new Error('Determinant is only defined for 2x2 matrices.')
  }
  const [[a, b], [c, d]] = m as [[number, number], [number, number]]

  return a * d - b * c
}

/**
 * Calculate the determinant of a 3x3 matrix using the rule of Sarrus or cofactor expansion.
 * Formula (Sarrus):
 * det(A) = aei + bfg + cdh - ceg - bdi - afh
 * @param {Matrix} m - The 3x3 matrix.
 * @returns {number} The determinant.
 */
export function determinant3x3(m: Matrix): number {
  if (
    m.length !== 3 ||
    m[0]!.length !== 3 ||
    m[1]!.length !== 3 ||
    m[2]!.length !== 3
  ) {
    throw new Error('Determinant is only defined for 3x3 matrices.')
  }
  const [[a, b, c], [d, e, f], [g, h, i]] = m as [
    [number, number, number],
    [number, number, number],
    [number, number, number],
  ]

  return a * (e * i - f * h) - b * (d * i - f * g) + c * (d * h - e * g)
}

/**
 * Return true if the determinant is non-zero (testing with a 2x2 or 3x3).
 * Hint: Call the appropriate determinant function based on the matrix size.
 * @param {Matrix} m - The matrix.
 * @returns {boolean} True if invertible, false otherwise.
 */
export function isInvertible(m: Matrix): boolean {
  if (m.length !== 2 && m.length !== 3) {
    throw new Error(
      'Invertibility check only supported for 2x2 and 3x3 matrices.',
    )
  }

  const det = m.length === 2 ? determinant2x2(m) : determinant3x3(m)

  return Math.abs(det) > 1e-9
}

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest

  describe('07_determinants', () => {
    describe('determinant2x2', () => {
      it('should calculate the determinant of a 2x2 matrix', () => {
        const m = [
          [1, 2],
          [3, 4],
        ]

        expect(determinant2x2(m)).toBeCloseTo(-2) // 1*4 - 2*3 = 4 - 6 = -2
      })
    })

    describe('determinant3x3', () => {
      it('should calculate the determinant of a 3x3 matrix', () => {
        const m = [
          [1, 2, 3],
          [0, 1, 4],
          [5, 6, 0],
        ]

        // det = 1*(1*0 - 4*6) - 2*(0*0 - 4*5) + 3*(0*6 - 1*5)
        // det = 1*(-24) - 2*(-20) + 3*(-5) = -24 + 40 - 15 = 1
        expect(determinant3x3(m)).toBeCloseTo(1)
      })
    })

    describe('isInvertible', () => {
      it('should return true for an invertible 2x2 matrix', () => {
        const m = [
          [1, 2],
          [3, 4],
        ] // det = -2

        expect(isInvertible(m)).toBe(true)
      })

      it('should return false for a singular 2x2 matrix', () => {
        const m = [
          [1, 2],
          [2, 4],
        ] // det = 1*4 - 2*2 = 0

        expect(isInvertible(m)).toBe(false)
      })

      it('should return true for an invertible 3x3 matrix', () => {
        const m = [
          [1, 2, 3],
          [0, 1, 4],
          [5, 6, 0],
        ] // det = 1

        expect(isInvertible(m)).toBe(true)
      })
    })
  })
}
