function roadRadar(curSpeed, area) {
  if(area == 'motorway') {
    if(curSpeed <= 130) {
      console.log(`Driving ${curSpeed} km/h in a ${area} zone`);
    } else {
      checkSpeedingStatus(curSpeed, 130);
    }
  } else if(area == 'interstate') {
    if(curSpeed <= 90) {
      console.log(`Driving ${curSpeed} km/h in a ${area} zone`);
    } else {
      checkSpeedingStatus(curSpeed, 90);
    }
  } else if(area == 'city') {
    if(curSpeed <= 50) {
      console.log(`Driving ${curSpeed} km/h in a ${area} zone`);
    } else {
      checkSpeedingStatus(curSpeed, 50);
    }
} else if(area == 'residential') {
  if(curSpeed <= 20) {
    console.log(`Driving ${curSpeed} km/h in a ${area} zone`);
  } else {
    checkSpeedingStatus(curSpeed, 20);
  }
}
}
roadRadar(200, 'motorway');

function checkSpeedingStatus(curSpeed, wantedSpeed) {
  let difference = curSpeed - wantedSpeed;
  if(difference <= 20) {
    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${wantedSpeed} - speeding`);
  } else if(difference <= 40) {
    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${wantedSpeed} - excessive speeding`);
  } else {
    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${wantedSpeed} - reckless driving`);
  }
}