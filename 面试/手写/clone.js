function deepClone (obj,map = new Map()){

    if(typeof obj === 'object' && obj !== null){

        //处理循环引用
        if(map.has(obj)){
            return map.get(obj)
        }

        var newObj = Array.isArray(obj) ? [] : {};

        map.set(obj,newObj)

        for (let key in obj){
            if(obj.hasOwnProperty(key)){
                newObj[key] = deepClone(obj[key],map)
            }


        }
        return newObj
    }

    return obj
}

let o = {a: 1, b: 2, c: [1,2,3], d:{age:18}};
o.o = o;
// 测试用例
let o2 = deepClone(o);
o2.c.pop();
o2.a = 110;
o2.d.name = '小白';
console.log(o, o2);
