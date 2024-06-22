// Define the base URL for the server
const baseUrl = "http://localhost:3030/jsonstore";

// Function to fetch friends data from the server
async function fetchFriends() {
  try {
    const response = await fetch(`${baseUrl}/friends`);
    if (!response.ok) {
      throw new Error('Failed to fetch friends data');
    }
    const data = await response.json();
    displayFriends(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Function to display friends data on the page
function displayFriends(data) {
  const contentDiv = document.getElementById('content');
  contentDiv.innerHTML = ''; // Clear existing content

  Object.values(data).forEach(person => {
    const cardHTML = `
      <div class="card">
        <img src="${person.img}" style="width: 100%" />
        <div class="container" data-age="${person.age}" data-work="${person.work}" data-phone="${person.phone}">
          <h4><b>${person.name}</b></h4>
          <button class="detailsBtn">Details</button>
        </div>
      </div>`;
    contentDiv.insertAdjacentHTML('beforeend', cardHTML);
  });
}

// Function to show details of a person
function showDetails(event) {
  const clickedButton = event.target;
  if (clickedButton.classList.contains('detailsBtn')) {
    const containerDiv = clickedButton.parentNode;
    toggleDetails(containerDiv);
  }
}

// Function to toggle the display of details
function toggleDetails(container) {
  const existingDetails = container.querySelectorAll('.detail');
  if (existingDetails.length > 0) {
    existingDetails.forEach(detail => detail.remove());
  } else {
    const details = ['age', 'work', 'phone'].map(key => {
      const detailPara = document.createElement('p');
      detailPara.classList.add('detail');
      detailPara.textContent = `${key.charAt(0).toUpperCase() + key.slice(1)}: ${container.getAttribute('data-' + key)}`;
      return detailPara;
    });
    details.forEach(detail => container.appendChild(detail));
  }
}

// Add event listener to the content div for event delegation
document.addEventListener('DOMContentLoaded', () => {
  // Add event listener to the content div for event delegation
  document.querySelector('.content').addEventListener('click', showDetails);

  // Fetch and display friends data on initial load
  fetchFriends();
});

// Fetch and display friends data on initial load
fetchFriends();