Object.prototype[Symbol.iterator]=function(){
  let index=0; 
      const keys = Object.keys(this);
  length=keys.length
  return {
    next:()=>{
      return {
        done:index>=length,
        value:this[keys[index++]]
      }
    }
  }
}

const obj={a:1,b:11,c:111}
obj.d=1111;
for (const val of obj) {
  console.log(val)
}
obj.e=11111;
for (const val of obj) {
  console.log('add',val)
}
