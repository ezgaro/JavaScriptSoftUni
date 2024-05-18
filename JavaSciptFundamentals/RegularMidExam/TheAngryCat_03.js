function theAngryCat(input, entryPoint, type) {
    let leftSum = 0;
    let rightSum = 0;
    let entryPointValue = input[entryPoint];

    if (type === "cheap") {
        for (let i = 0; i < entryPoint; i++) {
            if (input[i] < entryPointValue) {
                leftSum += input[i];
            }
        }
        for (let i = entryPoint + 1; i < input.length; i++) {
            if (input[i] < entryPointValue) {
                rightSum += input[i];
            }
        }
    } else if (type === "expensive") {
        for (let i = 0; i < entryPoint; i++) {
            if (input[i] >= entryPointValue) {
                leftSum += input[i];
            }
        }
        for (let i = entryPoint + 1; i < input.length; i++) {
            if (input[i] >= entryPointValue) {
                rightSum += input[i];
            }
        }
    } else {
        throw new Error("Invalid type: " + type);
    }

    if (entryPoint < 1 || entryPoint >= input.length - 1) {
        throw new Error("Invalid entry point: " + entryPoint);
    }

    if (leftSum >= rightSum) {
        console.log(`Left - ${leftSum}`);
    } else {
        console.log(`Right - ${rightSum}`);
    }
}

console.log(theAngryCat([1, 5, 1], 1, "cheap"));  // Left - 1
console.log(theAngryCat([5, 10, 12, 5, 4, 20], 3, "cheap"));  // Right - 4
theAngryCat([-2, 2, 1, 5, 9, 3, 2, -2, 1, -1, -3, 3], 7, "expensive");  // Left - 20