function charactersinRange(ch1 , ch2) {
    let start = Math.min(ch1.charCodeAt(0) ,ch2.charCodeAt(0)) + 1;
    let end = Math.max(ch1.charCodeAt(0) , ch2.charCodeAt(0));
    let output = "";

    for(let i = start ; i < end ; i++) {
        output += String.fromCharCode(i) + " ";
    }
    console.log(output);
}

charactersinRange('a' , 'd');