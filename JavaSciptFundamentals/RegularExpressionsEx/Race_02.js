function race(data) {
  let participants = {};
  let participantsArr = data.shift().split(', ');

  for(let driver of participantsArr) {
    participants[driver] = 0;
  }
  const patternName = /[A-Za-z]+/g;
  const patternDistance = /[0-9]/g;

  for(let line of data) {
    if(line === 'end of race') {
      break;
    }
    let name = line.match(patternName).join('');
    let distance = 0;
    let distanceAsArray = line.match(patternDistance);
    for(let el of distanceAsArray) {
      distance += Number(el);
    }

    if(participants.hasOwnProperty(name)) {
      participants[name] += distance;
    }
  }
  let sort = Object.entries(participants).sort((a,b) => b[1] - a[1]);
  console.log(`1st place: ${sort[0][0]}`);
  console.log(`2nd place: ${sort[1][0]}`);
  console.log(`3rd place: ${sort[2][0]}`);
}
race(
['George, Peter, Bill, Tom',
'G4e@55or%6g6!68e!!@ ',
'R1@!3a$y4456@',
'B5@i@#123ll',
'G@e54o$r6ge#',
'7P%et^#e5346r',
'T$o553m&6',
'end of race']);