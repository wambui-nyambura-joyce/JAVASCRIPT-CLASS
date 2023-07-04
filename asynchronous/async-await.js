let success = true;
let promise = new Promise((resolve,reject)=>{
    if (success){
        setTimeout(()=>{resolve('I succeded')},5000)

    }
    else{
        setTimeout(()=>{reject('I am still looking for a job')},5000)
        reject('I am still looking for a job');
    }
});//.then(()=>{console.log('I will work hard');})  //promise chaining
// .catch(()=>{console.log('I will upskill');})
// .finally(()=>{console.log('I am worthy');})
// console.log({promise});

// async function student ()
const student = async ()=>{
    let result = await promise;
    console.log({result});
}
student();

const students = async ()=>{
    try{
    let result = await promise;
    console.log({result});
}
catch{
    students()
}
}
// students();

