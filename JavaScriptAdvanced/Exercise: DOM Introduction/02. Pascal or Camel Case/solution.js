function solve() {
  let firstInput = document.getElementById('text').value;
  let caseInput = document.getElementById('naming-convention').value;
  let result = document.getElementById('result');
  if(caseInput == 'Camel Case') {
    let reworking = firstInput.toLowerCase().split(' ');
    let newrework = [reworking[0]];
    for(let i = 1; i < reworking.length; i++) {
      let newWord = reworking[i].substring(0,1).toUpperCase() + reworking[i].substring(1);
      newrework.push(newWord);
    }
    result.textContent = newrework.join('');
  } else if(caseInput == 'Pascal Case') {
    let reworking = firstInput.toLowerCase().split(' ');
    let newrework = [];
    for(let i = 0; i < reworking.length; i++) {
      let newWord = reworking[i].substring(0,1).toUpperCase() + reworking[i].substring(1);
      newrework.push(newWord);
    }
    result.textContent = newrework.join('');
  } else {
    result.textContent = 'Error';
  }
}