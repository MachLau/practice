function create(){
    //假定第一个为构造函数
    const Ctr = [].shift.apply(arguments);
    //创建一个this
    let obj = Object.create(Ctr);
    let result = ctr.call(obj,arguments);
    return result instanceof Object ?result:obj;
}