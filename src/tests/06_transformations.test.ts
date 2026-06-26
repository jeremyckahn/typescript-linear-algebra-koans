import { describe, it, expect } from 'vitest'
import {
  rotationMatrix2D,
  scalingMatrix2D,
  applyTransformation,
} from '../koans/06_transformations'
import type { Matrix } from '../koans/04_matrices'
import type { Vector } from '../koans/01_vectors'

function expectVectorCloseTo(actual: Vector, expected: Vector, numDigits = 4) {
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

function expectMatrixCloseTo(actual: Matrix, expected: Matrix, numDigits = 4) {
  expect(actual.length).toBe(expected.length)
  for (let i = 0; i < actual.length; i++) {
    const actualRow = actual[i]
    const expectedRow = expected[i]
    if (!actualRow || !expectedRow) {
      throw new Error('Matrix row is undefined')
    }
    expect(actualRow.length).toBe(expectedRow.length)
    for (let j = 0; j < actualRow.length; j++) {
      const val = actualRow[j]
      const exp = expectedRow[j]
      if (val === undefined || exp === undefined) {
        throw new Error('Matrix element is undefined')
      }
      expect(val).toBeCloseTo(exp, numDigits)
    }
  }
}

describe('06_transformations', () => {
  describe('rotationMatrix2D', () => {
    it('should generate a 2x2 rotation matrix for 90 degrees (PI/2)', () => {
      expectMatrixCloseTo(rotationMatrix2D(Math.PI / 2), [
        [0, -1],
        [1, 0],
      ])
    })

    it('should generate a 2x2 rotation matrix for 180 degrees (PI)', () => {
      expectMatrixCloseTo(rotationMatrix2D(Math.PI), [
        [-1, 0],
        [0, -1],
      ])
    })
  })

  describe('scalingMatrix2D', () => {
    it('should generate a 2x2 scaling matrix', () => {
      expectMatrixCloseTo(scalingMatrix2D(2, 3), [
        [2, 0],
        [0, 3],
      ])
    })
  })

  describe('applyTransformation', () => {
    it('should rotate a point by 90 degrees', () => {
      const point = [1, 0]
      // When implemented correctly, rotation by PI/2 maps (1,0) to (0,1)
      expectVectorCloseTo(
        applyTransformation(rotationMatrix2D(Math.PI / 2), point),
        [0, 1],
      )
    })
  })
})
