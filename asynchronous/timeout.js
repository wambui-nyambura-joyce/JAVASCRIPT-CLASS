const work= () =>{
    console.log('Let us work');
}
work();

const reminder = ()=>{
    console.log('Please attend the meeting');  //synchronous
}
setTimeout(reminder,4000);  //asynchronous used for long-running codes

const takeBreak = ()=>{
    console.log('Please rest');
}
takeBreak();
//clear interval and clear timeouts