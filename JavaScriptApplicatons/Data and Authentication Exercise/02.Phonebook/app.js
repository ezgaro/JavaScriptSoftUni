function attachEvents() {
  const loadButton = document.querySelector("#btnLoad");
  const createButton = document.querySelector("#btnCreate");
  const baseURL = "http://localhost:3030/jsonstore/phonebook";
  const phoneBook = document.querySelector("#phonebook");
  const personInputElement = document.querySelector("#person");
  const phoneInputElement = document.querySelector("#phone");

  //Load the contacts

  loadButton.addEventListener("click", async function () {
    try {
      phoneBook.innerHTML = "";

      let res = await fetch(baseURL);
      let data = await res.json();
      Object.values(data).map((contact) => {
        let str = contact.person + ": " + contact.phone;
        let listContactItem = document.createElement("li");
        let delButton = document.createElement("button");
        delButton.textContent = "Delete";
        delButton.id = "btnDelete";
        listContactItem.textContent = str;
        listContactItem.appendChild(delButton);
        phoneBook.appendChild(listContactItem);

        // Delete contacts
        delButton.addEventListener("click", async function () {
          await fetch(`${baseURL}/${contact._id}`, {
            method: "delete",
          });
          listContactItem.remove(); // This line removes the contact from the UI
        });
      });
    } catch {
      alert("Error in the get request");
    }
  });

  //Create new contacts
createButton.addEventListener("click", async function () {
    if (personInputElement.value === "" && phoneInputElement.value === "") {
      alert("Fill in the input fields");
      return; // Exit if fields are empty
    }

    //POST request
    let response = await fetch(baseURL, {
      method: "post",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        person: personInputElement.value,
        phone: phoneInputElement.value,
      }),
    });

    if (response.ok) { // Check if the POST request was successful
      let contact = await response.json(); // Assuming the server returns the created contact
      let str = contact.person + ": " + contact.phone;
      let listContactItem = document.createElement("li");
      let delButton = document.createElement("button");
      delButton.textContent = "Delete";
      delButton.id = "btnDelete";
      listContactItem.textContent = str;
      listContactItem.appendChild(delButton);
      phoneBook.appendChild(listContactItem);

      // Add delete functionality to the new contact
      delButton.addEventListener('click', async function () {
          await fetch(`${baseURL}/${contact._id}`, {
              method: "delete",
          });
          listContactItem.remove(); // Remove the contact from the UI
      });
    } else {
      alert('Failed to create contact');
    }

    personInputElement.value = "";
    phoneInputElement.value = "";
  });
}

attachEvents();
