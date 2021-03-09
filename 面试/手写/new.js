function myNew(){
    // var obj = new Object()
    // obj.__proto__ = [].shift.call(arguments).prototype

    var Construter = [].shift.call(arguments)
    var obj = Object.create(Construter.prototype)

    var res = Construter.call(obj,arguments)


    if((res !== null && typeof res === 'object') || typeof res === 'function'){
        return res
    }

    return obj
}
