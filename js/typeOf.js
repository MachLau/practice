function typeOf(obj) {
  return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
}

console.log(typeOf([]));
console.log(typeOf({}));
console.log(typeOf(new Date()));
