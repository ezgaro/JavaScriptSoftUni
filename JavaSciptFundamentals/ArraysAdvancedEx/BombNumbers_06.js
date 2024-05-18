function bombNumbers(sequence, bombInfo) {
    let bombNumber = bombInfo[0];
    let bombPower = bombInfo[1];

    while (sequence.includes(bombNumber)) {
        let bombIndex = sequence.indexOf(bombNumber);
        let start = Math.max(0, bombIndex - bombPower);
        let end = Math.min(sequence.length - 1, bombIndex + bombPower);
        sequence.splice(start, end - start + 1);
    }

    let sum = sequence.reduce((a, b) => a + b, 0);
    console.log(sum);
}

bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);