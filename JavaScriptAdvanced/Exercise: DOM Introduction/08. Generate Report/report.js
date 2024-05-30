function generateReport() {
    let headers = Array.from(document.querySelectorAll('thead tr th'));
    let selectedHeaders = headers.filter((header, i) => header.firstElementChild.checked).map((header, i) => i);
    let rows = Array.from(document.querySelectorAll('tbody tr'));
    let data = rows.map(row => {
        let obj = {};
        Array.from(row.children).forEach((cell, i) => {
            if(selectedHeaders.includes(i)) {
                obj[headers[i].lastChild.textContent.trim()] = cell.textContent;
            }
        });
        return obj;
    });
    document.getElementById('output').value = JSON.stringify(data, null, 2);
}