function solve() {
  //Selecting the Add, Open, In Progress, Complete Classes
  let addTaskElement = document.querySelector(".gray");
  let openElement = document.querySelector(".orange");
  let inProgressElement = document.querySelector(".yellow");
  let completeElement = document.querySelector(".green");

  //Add Task selectors
  let taskElement = document.querySelector("#task");
  let descriptionElement = document.querySelector("#description");
  let dueDateElement = document.querySelector("#date");
  let addButton = document.querySelector("#add");

  addButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (taskElement.value && descriptionElement.value && dueDateElement.value) {
      let newElement = document.createElement("article");
      let h3TaskElement = document.createElement("h3");
      let pDescriptionElement = document.createElement("p");
      let pDateElement = document.createElement("p");
      let divButtonsClassEleemnt = document.createElement("div");
      divButtonsClassEleemnt.classList.add("flex");
      let startButton = document.createElement("button");
      startButton.classList.add("green");
      let deleteButton = document.createElement("button");
      deleteButton.classList.add("red");

      h3TaskElement.textContent = taskElement.value;
      pDescriptionElement.textContent = descriptionElement.value;
      pDateElement.textContent = dueDateElement.value;
      startButton.textContent = "Start";
      deleteButton.textContent = "Delete";

      openElement.appendChild(newElement);
      newElement.appendChild(h3TaskElement);
      newElement.appendChild(pDescriptionElement);
      newElement.appendChild(pDateElement);
      newElement.appendChild(pDateElement);
      newElement.appendChild(divButtonsClassEleemnt);
      divButtonsClassEleemnt.appendChild(startButton);
      divButtonsClassEleemnt.appendChild(deleteButton);

      h3TaskElement.style.color = "black";
      pDescriptionElement.style.color = "black";
      pDateElement.style.color = "black";

    }
  });
}
