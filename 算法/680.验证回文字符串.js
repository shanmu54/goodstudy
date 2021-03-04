// 给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。
//
// 示例 1:
//
// 输入: "aba"
// 输出: True
// 示例 2:
//
// 输入: "abca"
// 输出: True
// 解释: 你可以删除c字符。
//

var validPalindrome = function(s) {
    let isEqual = function(str){
        let i =0,j = str.length-1
        while(i<j){
            if(str[i] != str[j]){
                return false;
            }
            i++;
            j--;
        }
        return true;
    }
    if(isEqual(s)){
        return true
    }

    let half = Math.ceil(s.length/2),count=1;

    for (var i=0,j = s.length-1; i< half; i++,j--){
         if(s[i] !== s[j] && count>0){

             let str1 = s.slice(i+1,j+1)

             let str2 = s.slice(i,j)
             console.log(str1)
             console.log(str2)

            return isEqual(str1) || isEqual(str2)

             //短路提升性能
            // return isEqual(s.slice(i+1,j+1)) || isEqual(s.slice(i,j))
         }
     }

};


console.log(validPalindrome('babcdefgb'))
