function  nxnMatrix(num) {
    let output = "";
    for(let i = 0 ; i < num; i++) {
        for(let j = 0 ; j < num ; j++) {
            output += `${num} `;
        }
        output += "\n";
    }
    console.log(output)
}
nxnMatrix(7);