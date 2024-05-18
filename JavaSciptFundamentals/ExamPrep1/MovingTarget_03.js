function movingTarget(input) {
    let targets = input.shift().split(' ').map(Number);

    for (let i = 0; i < input.length; i++) {
        let [command, index, value] = input[i].split(' ');
        index = Number(index);
        value = Number(value);

        switch (command) {
            case 'Shoot':
                if (targets[index] !== undefined) {
                    targets[index] -= value;
                    if (targets[index] <= 0) {
                        targets.splice(index, 1);
                    }
                }
                break;
            case 'Add':
                if (targets[index] !== undefined) {
                    targets.splice(index, 0, value);
                } else {
                    console.log('Invalid placement!');
                }
                break;
            case 'Strike':
                if (targets.slice(index - value, index + value + 1).length === value * 2 + 1) {
                    targets.splice(index - value, value * 2 + 1);
                } else {
                    console.log('Strike missed!');
                }
                break;
            case 'End':
                console.log(targets.join('|'));
                return;
        }
    }
}
movingTarget([
  "52 74 23 44 96 110",
  "Shoot 5 10",
  "Shoot 1 80",
  "Strike 2 1",
  "Add 22 3",
  "End",
]);
