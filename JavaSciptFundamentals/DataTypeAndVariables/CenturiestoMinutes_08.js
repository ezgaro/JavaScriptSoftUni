function CenturiestoMinutes(number) {
    //1 centuries = 100 years = 36524 days = 876576 hours = 52594560 minutes
    console.log(`${number} centuries = ${number*100} years = ${Math.trunc(number*100 * 365.2422)} days = ${Math.trunc(number*100 * 365.2422) * 24} hours = ${Math.trunc(number*100 * 365.2422) * 24 * 60} minutes`);
}
CenturiestoMinutes(1);