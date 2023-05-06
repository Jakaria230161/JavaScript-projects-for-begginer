/* 
Class topic - Class is the javascript template for the javascript object
------
1, class is not the object, it is a javascript template object.
2, class kintu hoisted hoy na
Class example
------------
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}
const newCar = new Car("Volvo", 2022);
console.log(newCar);

*/

// class example
class Mobile { // class variable name always will be capital
  constructor(name, ram, price) {
    this.name = name;
    this.ram = ram;
    this.price = price;
  }
  game(awesome, suggest) { // you can use method in a class and also use parameter
    return this.name + " " + "mobile is the best gaming phone"+ " " + awesome + " " + suggest; //must use return for returning something
  }
}
const newMobile = new Mobile("ASUS ROG", "8GB", 1500000);
console.log(newMobile);
console.log(newMobile.game("and super powerful device", "You should buy this type of device if you were a gamer."));

// class inheritance > use for code reusability
class CarName { // first class
  constructor(brand) {
    this.carName = brand;
  }
  present() {
    return "I have a  " + this.carName;
  }
}

class Model extends CarName { // second class and connection with first class by extends methods
  constructor(brand, mod) {
    super(brand); // call here CarName class's brand property by super method
    this.model = mod;
  }
  show() {
    return this.present() + ", it is a " + this.model; // here i called present() method, which method was in CarName class but right now i can call here because i extends with Model class
  }
}

let myNewCar = new Model("Mercedes", "X5");
console.log(myNewCar.show()); // i called show() method 