function myPromise(executor) {
    this.status = 'pending';
    this.value = undefined;
    this.value = undefined;
    this.reason = undefined;
    this.onResolvedCallbacks = [];
    this.onRejectedCallbacks = [];

    let _this = this
    try {
        executor(resolve, reject)
    } catch(e){
        reject(e)
    }
    function resolve (value){
        if(_this.status === 'pending'){
            _this.value = value;
            _this.onResolvedCallbacks.forEach(cb => cb(value))
            _this.status = 'resolved'
        }
    };
    function reject (reason){
        if(_this.status === 'pending'){
            _this.reason = reason;
            _this.onRejectedCallbacks.forEach(cb => cb(reason))
            _this.status = 'rejected'
        }
    }
}

myPromise.prototype.then = function(onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === "function" ? onFulfilled : value => value
    onRejected = typeof onRejected === "function" ? onRejected : err => { throw err }
  

    let promise2 = new Promi 
    if(this.status === 'pending'){
        
            this.onResolvedCallbacks.push(onFulfilled)
         
            this.onRejectedCallbacks.push(onRejected)
    }
    if (this.status === "resolved") {
      
        onFulfilled(this.value)
      
    }
    if (this.status === "rejected") {
     
        onRejected(this.reason)
      
    }
  }
  