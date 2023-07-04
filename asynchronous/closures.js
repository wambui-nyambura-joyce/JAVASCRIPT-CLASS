//closures remembers the values of the parent
const add = ()=>{
    let num =20;
    const subtract = ()=>{
        return num - 5;
    }
    return subtract;
}
console.log(add());
let nums = add();
console.log({nums});
console.log(nums());