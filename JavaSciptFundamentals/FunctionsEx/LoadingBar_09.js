function loadingBar(num) {
    let result = "";
    switch(num) {
        case 0 : outputWriter(0);break;
        case 10 : outputWriter(10);break;
        case 20 : outputWriter(20);break;
        case 30 : outputWriter(30);break;
        case 40 : outputWriter(40);break;
        case 50 : outputWriter(50);break;
        case 60 : outputWriter(60);break;
        case 70 : outputWriter(70);break;
        case 80 : outputWriter(80);break;
        case 90 : outputWriter(90);break;
        case 100 : {
            result += `100% Complete!`;
            console.log(result);
            console.log("[%%%%%%%%%%]");
        };break;
    }

    function outputWriter(num) {
        result += `${num}% [`;
            for(let i = 0 ; i < num/10 ; i++) {
                result += "%";
            }
            for(let i = num/10 ; i < 10 ; i++) {
                result += ".";
            }
            result += "]"
            console.log(result);
            console.log("Still loading...");
    }
}
loadingBar(100);