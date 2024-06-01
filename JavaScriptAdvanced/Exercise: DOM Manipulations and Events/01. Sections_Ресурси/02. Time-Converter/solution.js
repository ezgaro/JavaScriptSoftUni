function attachEventsListeners() {
    let daysBtn = document.getElementById('daysBtn');
    let hoursBtn = document.getElementById('hoursBtn');
    let minutesBtn = document.getElementById('minutesBtn');
    let secondsBtn = document.getElementById('secondsBtn');


    const calc = () => {
        let days = document.getElementById('days').value;
        let hours = document.getElementById('hours').value;
        let minutes = document.getElementById('minutes').value;
        let seconds = document.getElementById('seconds').value;

        if (days !== '') {
            hours = days * 24;
            minutes = days * 1440;
            seconds = days * 86400;
        } else if (hours !== '') {
            days = hours / 24;
            minutes = hours * 60;
            seconds = hours * 3600;
        } else if (minutes !== '') {
            days = minutes / 1440;
            hours = minutes / 60;
            seconds = minutes * 60;
        } else if (seconds !== '') {
            days = seconds / 86400;
            hours = seconds / 3600;
            minutes = seconds / 60;
        }

        document.getElementById('days').value = days;
        document.getElementById('hours').value = hours;
        document.getElementById('minutes').value = minutes;
        document.getElementById('seconds').value = seconds;
    };
    const addEventFuncConvert = (e) => {
        calc();
    }
    daysBtn.addEventListener('click', addEventFuncConvert);
    hoursBtn.addEventListener('click', addEventFuncConvert);
    minutesBtn.addEventListener('click', addEventFuncConvert);
    secondsBtn.addEventListener('click', addEventFuncConvert);
}