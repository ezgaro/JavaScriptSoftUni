function repeatString(str , rep) {
    let result = "";
    while(rep-- > 0) {
        result += str;
    }
    console.log(result);
}
repeatString("abc" , 3);