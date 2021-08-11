//ES5
function sleep(cb,time){
    typeof cb === 'function' && setTimeout(cb, time);
}
sleep(()=>{
    console.log(0)
},1000)
//promise
function sleep1(time){
    return new Promise((resolve)=>{
        setTimeout(resolve, time);
    })
}
sleep1(1000).then(()=>console.log(1))
// async
async function sleep2(time){
   let out =  await sleep1(time);
    console.log(2)
    return out;
}
sleep2(1000);
//generator
function *sleep3(time){
    yield sleep1(time)
}
sleep3(1000).next().value.then(()=>{console.log(3)})