// lib/index.test.ts
import { describe, it, expect } from 'vitest';
import { strToBool } from './index';

describe('strToBool', () => {
  it('should return true for truthy strings', () => {
    const truthyValues = ['y', 'yes', 't', 'true', 'on', '1'];
    for (const val of truthyValues) {
      expect(strToBool(val)).toBe(true);
      expect(strToBool(val.toUpperCase())).toBe(true);
      expect(strToBool(` ${val} `)).toBe(true);
    }
  });

  it('should return false for falsy strings', () => {
    const falsyValues = ['n', 'no', 'f', 'false', 'off', '0'];
    for (const val of falsyValues) {
      expect(strToBool(val)).toBe(false);
      expect(strToBool(val.toUpperCase())).toBe(false);
      expect(strToBool(` ${val} `)).toBe(false);
    }
  });

  it('should throw for invalid strings', () => {
    const invalidValues = ['maybe', '', '2', 'truth', 'nope'];
    for (const val of invalidValues) {
      expect(() => strToBool(val)).toThrowError(`Invalid truth value: ${val}`);
    }
  });
});
