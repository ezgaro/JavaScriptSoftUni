function examPrep(input) {
    let plunderDays = Number(input[0]);
    let daylyPlunder = Number(input[1]);
    let expextedPlunder = Number(input[2]);
    let totalPlunder = 0;

    for(let day = 1 ; day <= plunderDays; day++) {
        totalPlunder+=daylyPlunder;
        if(day % 3 === 0) {
            totalPlunder += daylyPlunder * 0.5;
        }
        if(day % 5 === 0) {
            totalPlunder -= totalPlunder * 0.3;
        }
    }
    if(totalPlunder >= expextedPlunder) {
        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
    } else {
        let percentage = totalPlunder / expextedPlunder * 100;
        console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
    }
}
examPrep(["5","40","100"]);