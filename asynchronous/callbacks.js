//callbacks are arguments that are used as functions
const sum = (num,a,callback)=>{
    let value = callback(a);
    console.log(num + value);
}
sum(20,5,function(a){return a});