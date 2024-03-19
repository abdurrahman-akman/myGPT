//* ===================================================
//*                 (OBJECTS)
//* ===================================================

//? Diziler sirali bellek bolgeleridir.Bu yuzden dizilere
//? indeksleme ile erisebiliriz. Ancak daha karmasik (unstructured)
//? verilerimiz icin  Object'leri kullanabiliriz.daha karmasık yapılar için ihtiyaç duyarız.
//?daha kompleks ve ilşkisel veri yapıları için diziler değil Objelerdir

//? Object'lerde Key-value (property-value) yapisi kullanilir.en önemli maddesidir
//? sıralı bir erişme şekli yok dizideki gibi key(property ile) ulaşırız dataya
//? nokta notasyonu ile key ulaşırız
//? Herhangi bir veriyi erismek icin property (key) adi kullanilir.

console.log("******* Objects *********");

//! 3 farkli yontem ile Object olusturulabilir

//* ---------------------------------------------------------
//* 1- Object literal (En cok tercih edilen yontem)
//* ---------------------------------------------------------
//*

const car = {
  brand: "Mercedes",
  model: 2020,
  engine: 2000,
  speed: 5,
  color: ["pink", "black", "blue", "green"],
};
console.log(car);

//? Objenin okunmasi (Read)
console.log(car.brand); //* 1) . notasyonu ile erişim.
console.log(car.color[0]); //? pink

console.log(car.color);
car.color.forEach((c) => console.log(c));

console.log(car.Engine); //? undefined çünkü büyük-kucuk harf hassasiyeti var
//!! Javascripte süslü ile gösterim var ise {} bu bir OBJEDİR ****

//? Objenin degerinin degisitirilmesi (write)
car.speed = 7;
car.color = "Morcivert";
car.class = "E"; //! olmayan bir deger ekleyebiliriz.

console.log(car);

//!  Uncaught TypeError: Assignment to constant variable.
// car = {
//   deneme: "1",
// }

//* 2)Objelere Square Bracket yontemi ile erisim
//! bu yontem key isimlerinin degiskenlerde saklanmasına izin verdigi icin dinamik olarak
// obje erisimlerinde kullanılabilir.

console.log("ENGINE:", car["engine"]); //? objeAdi["keyAdi"] bu formatlada obje içinde okuma yazma yakalama ekleme yaparız

// const myKey = prompt(
//   "Araba ile ilgili Neyi ogrenmek istersiniz: speed, color,engine ..."
//! square bracket yöntemi ile değişken ataması yapılabilir nokta notasyonuna gore avantajı
// )

// alert(car[myKey])

//* ---------------------------------------------------------
//* 2- Object() class'ından new Operatörü ile Ancak object literal best practice de daha fazla kullanılır
//* ---------------------------------------------------------

const myCar = new Object();
myCar.brand = "Mercedes";
myCar.model = 2022;
myCar.speed = 7;

console.log(myCar.speed);
console.log(myCar["model"]);

console.log(myCar);

//* ---------------------------------------------------------
//* 3- object constructor'i kullanarak (OOP ile ayrintilandirilacak)
//* ---------------------------------------------------------

function Personel(id, name, age, salary) {
  //! this personal kalıbının bir referesidir onu temsil eder.
  //!Personal kalıbından objeler üretiyoruz person1 person2 gibi...
  this.id = id;
  this.name = name;
  this.age = age;
  this.salary = salary;
  console.log(this);
}

const person1 = new Personel("1234567890", "Ahmet Can", 33, 30000);
const person2 = new Personel("123456745454", "Mehmet Veli", 23, 10000);

console.log(person1);

// //? ES6
// class Personel{
//     constructor()
// }

//* ======================================================
//*              Object Metotlari
//* ======================================================

const personel = {
  name: "Ahmet",
  surname: "Canan",
  dob: 1990,
  salary: 30000,
  drivingLicense: true,
  calculateAge: function () {
    console.log(this); //? personel objesini refere eder.
    return new Date().getFullYear() - this.dob; //! this olmadan dob tanımlı degildir cunku ayrı skoptalar this yazarak personel denim deriz.içinde bulundugu objeyi temsil eder
  },
  summary: () => {
    console.log(this); //? window objesini refere eder.window nedir.window browser daki herşeydir.penceredeki herşey dir.arrow func ile yazılıldıgı için burdaki this globali temsil edior
    return `${this.name} is ${this.calculateAge()} years old`;
  },
};

console.log(personel.name + " " + personel.surname);

console.log("AGE:", personel.calculateAge());

//! NOT: arrow fonksiyonlari ozellikle callback fonksiyonu olarak
//! kullanilmak ve bu fonksiyonlarda this keyword kullanim
//! gereksinimini kaldirmak icin gelistirilmistir.Yani ana globale baglılar cunku rahat ulaşalım cagıralım die
//! objeler içindeki functionları arrow ile yazmayalımm expression ile yazalım
//! Lexical context'e sahiptirler.Dolayisiyla, bir obje fonksiyonu
//! olarak kullanilirsa, this kelimesi global scope'u (window nesnesini)
//! gösterir. Bunu engellemek için object fonksiyonlarini tanimlarken
//! diger (func. expression veya declaration) yontemlerini kullanabilir.
// console.log(personel.summary())

//********************************************************
//* JSON => Javascript Object Notation
//********************************************************
//*API ler arasındaki baglantının cogunu JSON saglıyorr.
//*diziler [ {},{},{} ] diziler içindeki obje yapılarına JSON denir 
//* neden boyle bir yapı kullanılır objeler tek başlarına itere edilemiyor bu yuzde JSON JSON JSON

const team = [
  { name: "Ahmet", surname: "Can", job: "Developer", age: 30 },
  { name: "Mary", surname: "Bary", job: "tester", age: 22 },
  { name: "Hazel", surname: "Nut", job: "developer", age: 20 },
];

console.log(team);
console.log(team[1]);
console.log(team[1].name); //? Mary
console.log(team[2].age); //? 20

console.log("************");

//* Ornek1: team dizisindeki job'lari tek tek yazdiriniz.
team.forEach((p) => console.log(p.job));

//* Ornek2: age'leri bir artirarak yeni bir diziye saklayiniz.
const personelAges = team.map((person) => person.age + 1);
console.log(personelAges);

//* Ornek3: name ve surname'leri birlestirip buyuk harfe ceviren ve
//* bunu fullName key'i ile saklayan, ayni zamanda age degerlerini 5
//* arttirarak age key'ine saklayan ve olusan diziyi donduren kodu yazınız.
//!not Arrow un {} süslüsü açıldıysa return u yaz ve obje donecekse {süsülü kullan}
//* obje ve dizileri anla react tamamdır.

const teamFullName = team.map((p) => {
  return {
    fullName: p.name.toUpperCase() + " " + p.surname.toUpperCase(),
    age: p.age + 5,
  };
});

//? Alternative way tek bir single state var ise arrowun {süslüsünü silerblrz} arrowun süslüsü olmadıgını belli etmek içinde () parantezi içine alırız.return da kullanmaya bilirsin
const teamFullName1 = team.map((p) => ({
  fullName: p.name.toUpperCase() + " " + p.surname.toUpperCase(),
  age: p.age + 5,
}));

console.log(teamFullName1);

//* Ornek4: Yasi(age) 22 'den kucuk esit olan kisilerin adlarini (name) listeyiniz.
team.filter((p) => p.age <= 22).forEach((p) => console.log(p.name));

//* Ornek5: 22 yasindan kucuk ve esit olanlarin isimlerini diziye saklayiniz.
const teamUnder22 = team.filter((x) => x.age <= 22).map((p) => p.name);
console.log(teamUnder22);

//* Ornek6: ortalama yasi hesaplayiniz.
const avgAges = team.reduce((sum, person) => sum + person.age, 0) / team.length;
console.log("AVE AGE:", avgAges);
