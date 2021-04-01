//两数之和、三数之和至 N 数之和
function twoSum(nums,target){
    let map = new Map();
    for (let index = 0; index < nums.length; index++) {
        const remain =target - nums[index];
        if(map.has(remain)){
            return[map.get(remain),index]
        }
        map.set(nums[index],index)
    }
    return []
}