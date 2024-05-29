function sumTable() {
  // Select the first table in the document
  let table = document.querySelector('table');

  // Get all the rows in the table
  let rows = Array.from(table.querySelectorAll('tr'));

  // Calculate the sum of the last column
  let sum = rows.reduce((total, row) => {
    let cells = Array.from(row.querySelectorAll('td'));
    if (cells.length === 0) {
      // Skip this row if it doesn't have any 'td' elements
      return total;
    }
    let lastCell = cells[cells.length - 1];
    return total + Number(lastCell.textContent);
  }, 0);

  // Display the sum in the element with ID "sum"
  document.getElementById('sum').textContent = sum;
}