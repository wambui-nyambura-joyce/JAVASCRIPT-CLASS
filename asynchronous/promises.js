let success = false;
let promise = new Promise((resolve,reject)=>{
    if (success){
        resolve('I succeded');
    }
    else{
        reject('I am still looking for a job');
    }
}).then(()=>{console.log('I will work hard');})  //promise chaining
.catch(()=>{console.log('I will upskill');})
.finally(()=>{console.log('I am worthy');})
console.log({promise});
