// 给你一个整数数组 arr，请你帮忙统计数组中每个数的出现次数。

// 如果每个数的出现次数都是独一无二的，就返回 true；否则返回 false。

// 示例 1：

// 输入：arr = [1,2,2,1,1,3]
// 输出：true
// 解释：在该数组中，1 出现了 3 次，2 出现了 2 次，3 只出现了 1 次。没有两个数的出现次数相同。

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {

    var obj = {};

    for(var i =0; i < arr.length; i++){
        var val = arr[i]
        if(!obj[val]){

            obj[ val ] = 0
        };
        // console.log(val)
        obj[ val ] ++
    }
    var arr1 = Object.values(obj)
    var arr2 = Array.from(new Set(arr1))

    return arr1.length === arr2.length
};
arr = [1,2]
uniqueOccurrences(arr)
console.log(uniqueOccurrences(arr))
