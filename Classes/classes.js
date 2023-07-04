class Person{
    constructor(name,age,height){
        this.name = name
        this.age = age
        this.height =height
    }
    greet(){
        console.log('hello');
    }
};
let person = new Person('Henry', 22,'7ft');
console.log({person});

//INHERITANCE
// The super keyword is used to access properties on an object literal or 
// class's [[Prototype]], or invoke a superclass's constructor. 
// The super. prop and super[expr] expressions are valid in any method definition in both classes and object literals.

class Robot extends Person{
    constructor(name,age,height){
        super(name,age,height);
    }
};
let robot = new Robot('Essy',3,'5ft')
console.log({robot});

class CrazyRobot extends Person{
    constructor(name,age,height,dominate){
        super(name,age,height,dominate);
        this.walk = true;
        this.height = '7ft';
        this.dominate =dominate
    }
    world(){
        console.log(`I will ${this.dominate} the world`);
    }
}
let crazy = new CrazyRobot('Felix',4,'3ft','enslave')
crazy.world();

class LovingRobot extends CrazyRobot{
    constructor(name,age,height,dominate){
      super(name,age,height,dominate);
    }

}

let loving = new LovingRobot('ann',12,'2ft','love')
console.log({loving});


assignShootingDateAndLocation(castMember, date, location); {
    if (this.checkAvailability(castMember, date)) {
      castMember.availability[date] = false;
      this.dates.push(date);
      this.locations.push(location);
      console.log(`${castMember.name} is scheduled to shoot on ${date} at ${location}`);
    } else {
      console.log(`${castMember.name} is not available on ${date}`);
    }
  }

  checkAvailability(castMember, date); {
    return castMember.availability[date];
  }



// class Budget {
//   constructor(expenses, income) {
//     this.expenses = expenses;
//     this.income = income;
//   }

//   calculateTotalExpenses() {
//     let total = 0;
//     for (let expense of this.expenses) {
//       total += expense;
//     }
//     return total;
//   }

//   calculateTotalIncome() {
//     let total = 0;
//     for (let income of this.income) {
//       total += income;
//     }
//     return total;
//   }
// }