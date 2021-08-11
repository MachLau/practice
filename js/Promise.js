const PENDING='pending';
const FULFILED='fulfiled';
const REJECTED = 'rejected';

class Promise{
    constructor(executor){
        this.status=PENDING;
        this.value=undefined;
        this.reason=undefined;
        this.onResolvedCallbacks=[];
        this.onRejectedCallbacks=[];
        // 定义Promise初始化函数的回调resolve函数
        const resolve=value=>{
            if(this.status===PENDING){
                this.value=value;
                this.status=FULFILED;
                this.onResolvedCallbacks.forEach(fn=>fn())
            }
        }

        // 定义Promise初始化函数的回调reject函数
        const reject =value=>{
            if(this.status===PENDING){
                this.status===REJECTED;
                this.value=value;
                this.onRejectedCallbacks.forEach(fn=>fn())
            }
        }

        try {
            executor(resolve,reject);
        } catch (error) {
            reject(error)
        }
    }

    then(onFulfiled,onRejected){
        //如果未定义相关回调处理函数，则定义一个直接返回的默认函数
        onFulfiled = typeof onFulfiled ==='function'?onFulfiled:v=>v;
        onRejected=typeof onRejected==='function'?onRejected:error=>{throw error}
        let p =new Promise((resolve,reject)=>{
            if(this.status===FULFILED){
                setTimeout(() => {
                    try {
                        let x = onFulfiled(this.value);
                        //x可能是一个Promise
                        resolvePromise(p,c,resolve,reject);
                    } catch (error) {
                        reject(error)
                    }
                }, 0);
            }else if(this.status===REJECTED){
                setTimeout(() => {
                    try {
                        let x = onRejected(this.reason);
                        resolvePromise(p,x,resolve,reject)
                    } catch (error) {
                        reject(error)
                    }
                }, 0);
            }else if(this.status===PENDING){
                this.onResolvedCallbacks.push(()=>{
                    setTimeout(() => {
                        try {
                            let x = onFulfiled(this.value);
                            resolvePromise(p,x,resolve,reject)
                        } catch (error) {
                            reject(error)
                        }
                    }, 0);
                })

                this.onRejectedCallbacks.push(()=>{
                    setTimeout(() => {
                        try {
                            let x = onRejected(this.reason);
                            resolvePromise(p,x,resolve,reject);
                        } catch (error) {
                            reject(error)
                        }
                    }, 0);
                })
            }
        })
        return p;
    }
}

const resolvePromise=(p,x,resolve,reject)=>{
    let called;
    if((typeof x ==='object'&&x!=null)||typeof x === 'function'){
        try {
            let then = x.then;
            if(typeof then==='function'){
                then.call(x,y=>{
                    if(called)return;
                    called=true;
                    resolvePromise(p,y,resolve,reject);
                },r=>{
                    if(called)return;
                    called=true;
                    reject(r)
                })
            }else{
                resolve(x)
            }
        } catch (error) {
            
            if(called)return;
            called=true;
            reject(error)
        }
    }else{
        resolve(x)
    }
}