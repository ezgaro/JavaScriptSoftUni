function townPopulation(arr) {
  let resultObj = {};
  for(let el of arr) {
    let town = el.split(' <-> ')[0];
    let population = Number(el.split(' <-> ')[1]);
    if(!resultObj[town]) {
      resultObj[town] = 0;
    }

    resultObj[town] += population;
  }

  for(let k in resultObj) {
    console.log(k + " : " + resultObj[k]);
  }
}
townPopulation(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']
);