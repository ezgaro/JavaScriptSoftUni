function solve() {
    let currentStopId = 'depot';
    let currentStopName = '';
    const infoBox = document.querySelector('.info');
    const departButton = document.getElementById('depart');
    const arriveButton = document.getElementById('arrive');

    function depart() {
        const url = `http://localhost:3030/jsonstore/bus/schedule/${currentStopId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                currentStopName = data.name;
                currentStopId = data.next;
                infoBox.textContent = `Next stop ${currentStopName}`;
                departButton.disabled = true;
                arriveButton.disabled = false;
            })
            .catch(error => {
                infoBox.textContent = 'Error';
                departButton.disabled = true;
                arriveButton.disabled = true;
                console.log(error);
            });
    }

    function arrive() {
        infoBox.textContent = `Arriving at ${currentStopName}`;
        departButton.disabled = false;
        arriveButton.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();