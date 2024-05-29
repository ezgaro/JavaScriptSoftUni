function extract(elementId) {
  // Get the text from the target element
  let text = document.getElementById(elementId).textContent;

  // Use a regular expression to match all parenthesized text
  let matches = text.match(/\(([^)]+)\)/g);

  // Remove the parentheses and join the matches with "; "
  let result = matches.map(match => match.slice(1, -1)).join('; ');

  console.log(result);
}