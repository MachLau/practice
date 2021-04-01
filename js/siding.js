//区间分类
function randomNum(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);//含最大值最小值
}
// 生成随机数组
let arr = Array.from({length:10},()=>randomNum(0,99));
//数组排序
arr.sort((a,b)=>a-b);
//数组去重
 arr = [...(new Set(arr))]

 let map = new Map();
 arr.forEach((num)=>{
     let key = Math.floor(num/10)
     map.has(key)?map.get(key).push(num):map.set(key,[num]);
 })
 let result=[]
 map.forEach(value=>{
     result.push(value)
 })
console.log(arr,result)