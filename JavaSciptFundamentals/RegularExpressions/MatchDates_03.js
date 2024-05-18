function matchDates(input) {
  let pattern = /\b(\d{1,2})([-.\/])([A-Z][a-z]{2})\2(\d{4})\b/g;
  let match;

  while ((match = pattern.exec(input[0])) !== null) {
      console.log(`Day: ${match[1]}, Month: ${match[3]}, Year: ${match[4]}`);
  }
}
matchDates(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973,1/Feb/2016']);