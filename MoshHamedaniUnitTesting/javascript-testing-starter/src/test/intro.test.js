import { describe ,test, it, expect} from "vitest";
import { fizzBuzz, max } from "../intro";

describe('max', () => {
  it('should return the first argument if it is greater', () => {
    // AAA -> Arrange Act Assert
    const a = 2;
    const b = 1;

    const result = max(a, b);

    expect(result).toBe(2);

  });
});

describe('fizzBuzz', () => {
  it('should return FizzBuzz if it is devisible by both 5 and 3', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
  });
  it('should return Buzz if it is devisible by 5', () => {
    expect(fizzBuzz(25)).toBe('Buzz');
  });
  it('should return Fizz if it is devisible by 3', () => {
    expect(fizzBuzz(27)).toBe('Fizz');
  })
});
