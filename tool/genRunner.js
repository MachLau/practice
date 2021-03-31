function run(gen){
    var args=[].slice.call(arguments,1),it;
    it=gen.apply(this,args);
    return Promise.resolve().then(function handleNext(value){
        var next = it.next(value);
        return(function handleResult(next){
            if(next.done) {return next.value;
            }else{
                return Promise.resolve(next.value).then(handleNext,function handleError(err){
                    return Promise.resolve(it.throw(err)).then(handleResult);
                })
            }
        })(next)
    })
}

function *foo(){
    console.log("inside *foo:",yield 'B');
    console.log("inside *foo:",yield 'C');
    return 'D'
}
function *bar(){
    console.log("inside *bar:",yield 'A');
    console.log("inside *bar:",yield *foo());
    console.log("inside *bar:",yield 'E');
    return 'F'
}
console.log('ouside',it.next)