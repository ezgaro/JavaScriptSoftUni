const baseURL = "http://localhost:3030/jsonstore/collections/students";
const table = document.querySelector('#results tbody');
const submitButton = document.querySelector('#submit');
const firstNameInput = document.querySelector('input[name="firstName"]');
const lastNameInput = document.querySelector('input[name="lastName"]');
const facultyInput = document.querySelector('input[name="facultyNumber"]');
const gradeInput = document.querySelector('input[name="grade"]');

async function renderingTheDataBase() {
  let res = await fetch(baseURL);
  let data = await res.json();
  Object.values(data).forEach(student => {
    const tr = document.createElement('tr');

    const tdFirstName = document.createElement('td');
    tdFirstName.textContent = student.firstName;
    tr.appendChild(tdFirstName);

    const tdLastName = document.createElement('td');
    tdLastName.textContent = student.lastName;
    tr.appendChild(tdLastName);

    const tdFacultyNumber = document.createElement('td');
    tdFacultyNumber.textContent = student.facultyNumber;
    tr.appendChild(tdFacultyNumber);

    const tdGrade = document.createElement('td');
    tdGrade.textContent = student.grade;
    tr.appendChild(tdGrade);

    table.appendChild(tr);
  });
}
renderingTheDataBase();
submitButton.addEventListener('click', async function(event){
  event.preventDefault(); // Prevent form submission which refreshes the page
  // Check if any input field is empty
  if(firstNameInput.value === '' || lastNameInput.value === '' || facultyInput.value === '' || gradeInput.value === '' ) {
    alert('Fill in all the input fields');
    return; // Stop the function if any field is empty
  }

  // Create a new student object
  const newStudent = {
    firstName: firstNameInput.value,
    lastName: lastNameInput.value,
    facultyNumber: facultyInput.value,
    grade: gradeInput.value
  };

  // Append the new student to the table
  const tr = document.createElement('tr');
  Object.values(newStudent).forEach(value => {
    const td = document.createElement('td');
    td.textContent = value;
    tr.appendChild(td);
  });
  table.appendChild(tr);

  // Make a POST request to save the new student data
  await fetch(baseURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newStudent)
  });

  // Optionally, clear the input fields after submission
  firstNameInput.value = '';
  lastNameInput.value = '';
  facultyInput.value = '';
  gradeInput.value = '';
});
