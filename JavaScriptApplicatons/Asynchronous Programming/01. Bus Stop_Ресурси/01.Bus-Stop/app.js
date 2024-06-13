function getInfo() {
  let baseURL = "http://localhost:3030/jsonstore/bus/businfo/";
  let inputElement = document.querySelector("#stopId");
  let buttonSubmit = document.querySelector("#submit");
  let stopNameElement = document.querySelector("#stopName");
  let ulElement = document.querySelector("#buses");

fetch(`${baseURL}${inputElement.value}`)
  .then((response) => response.json())
  .then((data) => {
    if (data && data.name && data.buses && data.buses.hasOwnProperty(inputElement.value)) { // Check if data is valid and input is part of the object
      let name = data.name;
      stopNameElement.textContent = name;
      ulElement.innerHTML = ''; // Clear previous bus entries
      let buses = data.buses;
      for (let bus in buses) {
        if (bus === inputElement.value) { // Check if the bus matches the input
          let liEl = document.createElement("li");
          liEl.textContent = `Bus ${bus} arrives in ${buses[bus]} minutes`; // Display only the bus that matches the input
          ulElement.appendChild(liEl);
        }
      }
    }
  })
  .catch((err) => {
    console.log(err);
    stopNameElement.textContent = "Error"; // Set text to "Error" if data is invalid or input is not part of the object
      ulElement.innerHTML = ''; // Optionally clear any previous bus entries
  });
}
