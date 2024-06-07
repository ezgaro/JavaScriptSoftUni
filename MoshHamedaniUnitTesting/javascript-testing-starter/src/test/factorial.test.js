import { describe, expect, it } from "vitest";
import { factorial } from "../libs/factorial";

describe('factorial', () => {
  it('should return 1 for the input 0', () => {
    expect(factorial(0)).toBe(1);
  });

  it('should return 1 for the input 1', () => {
    expect(factorial(1)).toBe(1);
  });

  it('should return 2 for the input 2', () => {
    expect(factorial(2)).toBe(2);
  });

  it('should return 6 for the input 3', () => {
    expect(factorial(3)).toBe(6);
  });

  it('should return 24 for the input 4', () => {
    expect(factorial(4)).toBe(24);
  });

  it('should throw an error for negative inputs', () => {
    expect(() => factorial(-1)).toThrow("Input must be a non-negative integer");
  });

  it('should throw an error for non-integer inputs', () => {
    expect(() => factorial(3.5)).toThrow("Input must be a non-negative integer");
  });
});