export type Vector = number[]

/**
 * Add two vectors of any N-dimension.
 * Formula: v1 + v2 = [v1_1 + v2_1, v1_2 + v2_2, ..., v1_n + v2_n]
 * Hint: Iterate through the vectors and sum their corresponding components.
 * @param {Vector} v1 - The first vector.
 * @param {Vector} v2 - The second vector.
 * @returns {Vector} The sum of v1 and v2.
 */
export function vectorAdd(v1: Vector, v2: Vector): Vector {
  throw new Error('Not implemented')
}

/**
 * Subtract v2 from v1.
 * Formula: v1 - v2 = [v1_1 - v2_1, v1_2 - v2_2, ..., v1_n - v2_n]
 * Hint: Iterate through the vectors and subtract the components of v2 from v1.
 * @param {Vector} v1 - The vector to subtract from.
 * @param {Vector} v2 - The vector to subtract.
 * @returns {Vector} The difference of v1 and v2.
 */
export function vectorSubtract(v1: Vector, v2: Vector): Vector {
  throw new Error('Not implemented')
}

/**
 * Multiply vector v by scalar c.
 * Formula: c * v = [c * v_1, c * v_2, ..., c * v_n]
 * Hint: Iterate through the vector and multiply each component by the scalar.
 * @param {number} c - The scalar value.
 * @param {Vector} v - The vector.
 * @returns {Vector} The scaled vector.
 */
export function scalarMultiply(c: number, v: Vector): Vector {
  throw new Error('Not implemented')
}

/**
 * Calculate the length/magnitude (L2 norm) of a vector using the Pythagorean theorem extended to N dimensions.
 * Formula: ||v|| = sqrt(v_1^2 + v_2^2 + ... + v_n^2)
 * Hint: Sum the squares of each component, then take the square root of the sum.
 * @param {Vector} v - The vector.
 * @returns {number} The magnitude of the vector.
 */
export function magnitude(v: Vector): number {
  throw new Error('Not implemented')
}

/**
 * Return a unit vector (magnitude of 1) pointing in the same direction as v.
 * Formula: v_hat = v / ||v||
 * Hint: Divide each component of the vector by its magnitude.
 * @param {Vector} v - The vector to normalize.
 * @returns {Vector} The normalized vector.
 */
export function normalize(v: Vector): Vector {
  throw new Error('Not implemented')
}

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest

  const expectVectorCloseTo = (
    actual: Vector,
    expected: Vector,
    numDigits = 4,
  ) => {
    expect(actual.length).toBe(expected.length)
    for (let i = 0; i < actual.length; i++) {
      const val = actual[i]
      const exp = expected[i]

      if (val === undefined || exp === undefined) {
        throw new Error('Vector element is undefined')
      }
      expect(val).toBeCloseTo(exp, numDigits)
    }
  }

  describe('01_vectors', () => {
    describe('vectorAdd', () => {
      it('should add two 2D vectors', () => {
        expectVectorCloseTo(vectorAdd([1, 2], [3, 4]), [4, 6])
      })

      it('should add two 3D vectors', () => {
        expectVectorCloseTo(vectorAdd([1, 2, 3], [4, 5, 6]), [5, 7, 9])
      })

      it('should throw an error for mismatched dimensions', () => {
        expect(() => vectorAdd([1, 2], [1, 2, 3])).toThrow()
      })
    })

    describe('vectorSubtract', () => {
      it('should subtract two 2D vectors', () => {
        expectVectorCloseTo(vectorSubtract([3, 4], [1, 2]), [2, 2])
      })

      it('should throw an error for mismatched dimensions', () => {
        expect(() => vectorSubtract([1, 2], [1, 2, 3])).toThrow()
      })
    })

    describe('scalarMultiply', () => {
      it('should multiply a vector by a scalar', () => {
        expectVectorCloseTo(scalarMultiply(2, [1, 2, 3]), [2, 4, 6])
      })

      it('should handle multiplying by 0', () => {
        expectVectorCloseTo(scalarMultiply(0, [1, 2, 3]), [0, 0, 0])
      })
    })

    describe('magnitude', () => {
      it('should calculate the magnitude of a 2D vector', () => {
        expect(magnitude([3, 4])).toBeCloseTo(5)
      })

      it('should calculate the magnitude of a 3D vector', () => {
        expect(magnitude([1, 2, 2])).toBeCloseTo(3)
      })

      it('should calculate the magnitude of a zero vector', () => {
        expect(magnitude([0, 0, 0])).toBeCloseTo(0)
      })
    })

    describe('normalize', () => {
      it('should normalize a 2D vector', () => {
        expectVectorCloseTo(normalize([3, 4]), [0.6, 0.8])
      })

      it('should normalize a 3D vector', () => {
        expectVectorCloseTo(normalize([1, 2, 2]), [1 / 3, 2 / 3, 2 / 3])
      })

      it('should throw an error when normalizing a zero vector', () => {
        expect(() => normalize([0, 0])).toThrow()
      })
    })
  })
}
