import { expect } from 'chai';
import isSymmetric from '../CheckforSymmetry';

describe("Check for Symmetry", () => {
  it("Should return false if the input is not an array", () => {
    expect(isSymmetric(123)).to.be.false;
    expect(isSymmetric('test')).to.be.false;
    expect(isSymmetric(null)).to.be.false;
    expect(isSymmetric(undefined)).to.be.false;
    expect(isSymmetric({})).to.be.false;
  });

  it("Should return true if the array is symmetric", () => {
    expect(isSymmetric([1, 2, 3, 2, 1])).to.be.true;
    expect(isSymmetric(['a', 'b', 'b', 'a'])).to.be.true;
    expect(isSymmetric([1])).to.be.true;
    expect(isSymmetric([])).to.be.true;
  });

  it("Should return false if the array is not symmetric", () => {
    expect(isSymmetric([1, 2, 3, 4, 5])).to.be.false;
    expect(isSymmetric(['a', 'b', 'c'])).to.be.false;
  });
});