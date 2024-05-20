function timeToWalk(steps, footprint, speed) {
  let distance = steps * footprint;
  let speedInMetersPerSecond = speed / 3.6;
  let timeForRestInSeconds = Math.floor(distance / 500) * 60;
  let timeForWalkingInSeconds = distance / speedInMetersPerSecond;
  let sumUpTimeInSeconds = timeForRestInSeconds + timeForWalkingInSeconds;
  let hours = Math.floor(sumUpTimeInSeconds / 3600);
  let minutes = Math.floor((sumUpTimeInSeconds % 3600) / 60);
  let seconds = Math.round(sumUpTimeInSeconds % 60);
  if(hours < 10) {
    hours = '0' + hours;
  }
  if(minutes < 10) {
    minutes = '0' + minutes;
  }
  if(seconds < 10) {
    seconds = '0' + seconds;
  }

  console.log(String(hours) + ':' + String(minutes) + ':' + String(seconds));
}
timeToWalk(4000, 0.60, 5);