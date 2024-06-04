// const { sum } = require("./sumOfNumbers");
// const { expect } = require('chai').assert;

// describe("Sum of numbers", () => {
//   it("Should return the sum of the numbers in the arr", () => {
//     let numbers = [1, 2, 3, 4, 5];
//     let actualSum = sum(numbers);
//     expect(actualSum).to.equal(15);
//   });

//   it("Should return 0 when the arr is empty", () => {
//     let numbers = [];
//     let actualSum = sum(numbers);
//     expect(actualSum).to.equal(0);
//   });

//   it("Should return the same number when the arr contains only one number", () => {
//     let numbers = [10];
//     let actualSum = sum(numbers);
//     expect(actualSum).to.equal(10);
//   });

//   it("Should return the correct sum when the arr contains negative numbers", () => {
//     let numbers = [-1, -2, -3, -4, -5];
//     let actualSum = sum(numbers);
//     expect(actualSum).to.equal(-15);
//   });

//   it("Should return NaN when the arr contains non-numeric values", () => {
//     let numbers = [1, 2, "three", 4, 5];
//     let actualSum = sum(numbers);
//     expect(actualSum).to.be.NaN;
//   });
// });