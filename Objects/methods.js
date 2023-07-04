let student = {
    name: "Joyce",
    age:21,
    greet:function () {
        console.log("Hello");
        console.log(`Hello my name is ${student.name} and I am ${student.age} years old`);
        console.log(`Hello my name is ${this.name} and I am ${this.age} years old`);
    }
};

student.greet();
student.talk = function (){
    console.log('hello there');

};
student.talk();