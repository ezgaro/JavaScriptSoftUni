function colorize() {
    let tr = document.getElementsByTagName("tr");
    let rows = Array.from(tr);
    console.log(rows);
    for(let i = 1; i < rows.length; i += 2) {
        rows[i].style.backgroundColor = 'teal';
    }
}