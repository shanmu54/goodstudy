const obj = {
    [Symbol.iterator]: function() {
        return {
            next: function(){
                return {
                    value:1,
                    done:true
                }
            }
        }
    }
}