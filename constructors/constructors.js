function Person(name, age, height) {
    this.name = name;
    this.age = age;
    this.height = height;
    
};
let person = new Person('Agnes',23,'3ft'); // object instances
console.log({person});
console.log(person);
let person2 = new Person('joy',34,'5ft');
console.log({person2});

 console.log( Person.prototype);
 Person.prototype.weight=50;
 console.log(Person.prototype);
 console.log({person});
 console.log(person.weight);
 person2.weight = 30;
 console.log({person2});

//  The prototype data property of a Function instance is used when the function is used as a constructor
//   with the new operator.
//   It will become the new object's prototype. Note: Not all Function objects have the prototype property