// 冒泡排序
// 两两比较，i大于j交换位置，直到最后一个位置
function bubbleSort(array) {
  // 一轮遍历排好一个数的位置
  for (let i = 0; i < array.length; i++) {
    // 比较排好序之外的元素
    for (let j = 0; j < array.length - i - 1; j++) {
      // 比较相邻的两个数
      array[j] > array[j + 1] && switchNum(array, j, j + 1);
    }
  }
}

function bubbleSort2(array) {
  let i = array.length - 1;
  while (i > 0) {
    let pos = 0;
    for (let j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        // 记录交换的位置
        pos = j;
        switchNum(array, j, j + 1);
      }
    }
    // 最后一次交换位置之前的值是无序的，需要进入下一循环再度排序
    i = pos;
    // 如果一次循环下来pos的位置没有改变，说明剩余的元素已经是有序的状态，i=0，结束循环
  }
}

function switchNum(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
