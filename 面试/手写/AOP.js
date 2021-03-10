

Function.prototpe.before = function(before){
    var self = this;
    return function(){
        before.apply(this,arguments);
        return self.apply(this,arguments)
    }
}

Function.prototype.after = function(after){
    var self = this;
    return function(){
        var ret = self.apply(this,arguments);
        after.apply(this,arguments)
        return ret
    }
}

var func = function(){
    console.log(2)
}

func = func.before(function(){
    console.log(1)
}).after(function(){
    console.log(3)
})



{

    function currying(fn,...args){
        return function (...newArgs){

            console.log(...args,...newArgs)
        }
    }

    function sum (){
        
    }

    var fn = currying(sum,1)
    console.log(fn)
    var fn2 = fn(3)
}