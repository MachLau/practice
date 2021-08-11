//如何模拟实现 new 操作符
function create() {
  const Ctr = [].shift.call(arguments);
  let obj = Object.create(Ctr.prototype);
  const result = Ctr.apply(obj, arguments);
  return result instanceof Object ? result : obj;
}
function Person(name, age) {
  this.name = name;
  this.age = age;
}
const p = create(Person, "Mach", 26);
console.log(p);
