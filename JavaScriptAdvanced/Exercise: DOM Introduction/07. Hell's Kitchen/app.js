function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
     let input = document.querySelector('#inputs textarea').value;
     let inputArr = JSON.parse(input);
     let restaurants = {};

     for(let restaurant of inputArr) {
       let [restaurantName, workersStr] = restaurant.split(" - ");
       let workersArr = workersStr.split(", ");
       let workers = workersArr.map(workerStr => {
         let [name, salary] = workerStr.split(" ");
         return {name, salary: Number(salary)};
       });

       if(restaurants[restaurantName]) {
         restaurants[restaurantName].workers.push(...workers);
       } else {
         restaurants[restaurantName] = {workers};
       }

       let totalSalary = restaurants[restaurantName].workers.reduce((total, worker) => total + worker.salary, 0);
       let averageSalary = totalSalary / restaurants[restaurantName].workers.length;
       let bestSalary = Math.max(...restaurants[restaurantName].workers.map(worker => worker.salary));

       restaurants[restaurantName].averageSalary = averageSalary;
       restaurants[restaurantName].bestSalary = bestSalary;
     }

     let bestRestaurantName = Object.keys(restaurants).reduce((best, name) => restaurants[name].averageSalary > restaurants[best].averageSalary ? name : best);
     let bestRestaurant = restaurants[bestRestaurantName];

     bestRestaurant.workers.sort((a, b) => b.salary - a.salary);

     document.querySelector('#bestRestaurant p').textContent = `Name: ${bestRestaurantName} Average Salary: ${bestRestaurant.averageSalary.toFixed(2)} Best Salary: ${bestRestaurant.bestSalary.toFixed(2)}`;
     document.querySelector('#workers p').textContent = bestRestaurant.workers.map(worker => `Name: ${worker.name} With Salary: ${worker.salary}`).join(' ');
   }
 }