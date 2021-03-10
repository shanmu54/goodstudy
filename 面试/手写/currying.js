// var curry = (function(){
//     var count = 0
//     return function(){
//         count++
//     }
// })()

// 参数
{
    
    function sum  (a,b,c,d){
        return a+b+c+d
    }
    var currying = function(fn,...args){
        if(args.length < fn.length){
            return (...newArgs) => currying(fn,...args,...newArgs)
        }else{
            return fn(...args)
        }
    }

    // 测试用例
    let add = currying(sum);
    console.log(add(1)(2)(3)(4));
    console.log(add(1, 2, 3)(4));
    console.log(add(1, 2)(3, 4));
    console.log(add(1)(2, 3)(4));

}

// toString
{
    function currying(fn, ...args){

        let newFn = (...newArgs)=> currying(fn,...args, ...newArgs)

        newFn.toString = function(){
           return fn(...args)
        }
        return newFn
    }

      
    function sum  (a,b,c,d){
        console.log(a,b,c,d)
        return a+b+c+d
    }
    let add = currying(sum);
    console.log(add(1, 2, 3).toString())
}