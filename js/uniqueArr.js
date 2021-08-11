//数组去重
function uniqueArrEs5(arr) {
  return arr.filter(function (value, index, array) {
    return array.indexOf(value) === index;
  });
}

const uniqueArrEs6 = (arr) => [...new Set(arr)];

//数组扁平化
arr.flat(n);

// es5 递归实现
function flatten5(arr) {
  let result = [];
  arr.forEach((element) => {
    Array.isArray(element)
      ? (result = result.concat(flatten(element)))
      : result.push(element);
  });
  return result;
}

function flatten6(arr) {
  while (arr.some((item) => Array.isArray(item))) {
    arr = [].concat(arr);
  }
  return arr;
}
