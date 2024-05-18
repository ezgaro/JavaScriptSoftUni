function generateSequence(n, k) {
    let sequence = [1];

    for (let i = 1; i < n; i++) {
        let sum = 0;
        let start = Math.max(0, i - k);
        for (let j = start; j <= i - 1; j++)
            sum += sequence[j];
        sequence.push(sum);
    }

    console.log(sequence.join(' '));
}

let n = 6;
let k = 3;
console.log(generateSequence(n, k));