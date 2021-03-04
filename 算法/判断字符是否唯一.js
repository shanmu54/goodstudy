// 面试题 01.01. 判定字符是否唯一
// 实现一个算法，确定一个字符串 s 的所有字符是否全都不同。

// 示例 1：

// 输入: s = "leetcode"
// 输出: false 
// 示例 2：

// 输入: s = "abc"
// 输出: true

/**
 * @param {string} astr
 * @return {boolean}
 */
var isUnique = function(astr) {
    for(var a of astr){
         if(astr.indexOf(a) !== astr.lastIndexOf(a)  ){
             return false
         }
    }

    return true

};
s = "aabc"
isUnique(s)