class Company {
  constructor() {
    this.departments = {};
  }

  addEmployee(name, salary, position, department) {
    validator(name);
    validator(salary, true);
    validator(position);
    validator(department);

    if (!this.departments[department]) {
      this.departments[department] = [];
    }
    this.departments[department].push({ name, salary, position });
    console.log(`New employee is hired. Name: ${name}. Position: ${position}`);
  }

  bestDepartment() {
    let departmentsArray = [];
    for (const key in this.departments) {
      if (Object.hasOwnProperty.call(this.departments, key)) {
        const element = this.departments[key];
        let avgSalary = 0;
        let counterOfEmployees = 0;
        let sumOfDepSalaries = 0;
        for(const employee of element) {
          let salary = employee.salary;
          counterOfEmployees++;
          sumOfDepSalaries += salary;
        }
        avgSalary = sumOfDepSalaries / counterOfEmployees;
        departmentsArray.push({ name: key, avgSalary: avgSalary, employees: element});
      }
    }
    // Sorting the array based on avgSalary in descending order
    departmentsArray.sort((a, b) => b.avgSalary - a.avgSalary);
    console.log(`Best Department is: ${departmentsArray[0].name}\nAverage salary: ${departmentsArray[0].avgSalary}`);
    for(const employee of departmentsArray[0].employees) {
      console.log(`${employee.name} ${employee.salary} ${employee.position}`);
    }
  }
}

function validator(inp, isSalary = false) {
  if (inp === "" || inp === undefined || inp === null) {
    throw new Error("Invalid input!");
  }
  if (isSalary && typeof inp !== "number") { // Corrected logic for salary validation
    throw new Error("Invalid input!");
  }
  if (!isSalary && typeof inp === "number") { // Ensure non-salary inputs are not numbers
    throw new Error("Invalid input!");
  }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());