const car = {
     brand: "mercedes",
     model: 2020,
     engine: 2000,
     speed: 5,
     color: ["pink", "black", "blue", "green"],
};
// console.log(car)
// const  myKey = prompt("araba ile ilgili neyi ogrenmek istersininz")
// alert(car[myKey])


// const myCar = new Object();
// myCar.brand = "mercedes";
// myCar.speed = 7;
// myCar.color = ["pink", "blue", "black"]
// console.log(myCar["color"])

// function Personel(id, name, age, salary) {
//      this.id = id;
//      this.name = name;
//      this.age = age;
//      this.salary = salary;
//      // console.log(this);
// }
// const person1 = new Personel("6416466", "ali", 33, 2000);
// console.log(person1)

// const personel = {
//      name: "ahmet",
//      surname: "can",
//      dob: 1990,
//      salary: 3000,
//      drivingLicense: true,
//      calculateAge: function () {
//           console.log();
//           return new Date().getFullYear() -this.dob;
//      },
//      summary: () => {
//           console.log(this);
//           return `${this.name} is ${this.calculateAge()} years old`;
//      },
// };
// console.log(personel.name + " " + personel.surname);
// console.log(personel.calculateAge());


const team = [
     {name: "ali", age: 25, job: "doctor"},
     {name: "ayşe", age: 19, job: "lowyer"},
];
console.log(team)
console.log(team[0])
console.log(team[1].age)

team.forEach((p) => console.log(p.job))
const neww = team.map((person) => person.age +1)
console.log(neww);

const teamfullName = team.map((p) => {
     return {
          FullName: p.name.toLocaleUpperCase() + " " + p.job.toUpperCase(),
          age: p.age +5
     }
})
console.log(teamfullName)