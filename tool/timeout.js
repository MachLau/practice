timeoutify(fn,delay){
    let timer = setTimeout(() => {
        timer=null;
        fn(new Error('timeout!'))
    }, delay);
    return function(){
        if(timer){
            clearTimeout(timer);
            fn.apply(this,arguments)
        }
    }
}